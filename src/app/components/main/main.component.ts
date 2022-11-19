import { NotificacoesService } from 'src/app/libs/core/services/notificacoes.service';
import { NotificacaoResponse } from '../../core/models/notificacao.response';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MyHubConnectionService } from 'src/app/core/services/hubConnection.service';
import { UsuarioNotificacaoService } from 'src/app/core/services/usuarioNotificacao.service';
import { SessaoService } from 'src/app/libs/core/services/sessao.service';
import { NotificacaoRequest } from 'src/app/core/models/notificacao.request';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuario: string;
  qtdNotificacoes: number = 0;
  notificacoes: Array<NotificacaoResponse>;

  @ViewChild("dropDownMenu") menu: TemplateRef<ElementRef>;

  constructor(private sessaoService: SessaoService,
              private usuarioNotificacao: UsuarioNotificacaoService,
              private notificacoesService: NotificacoesService,
              private hubConnectionService: MyHubConnectionService,
              private router: Router) { }

  ngOnInit(): void {
    let sessao = this.sessaoService.recuperar();
    this.usuario = sessao.Nome;

    this.hubConnectionService.conectar(sessao);

    this.hubConnectionService.evento.subscribe((data) => {
      let mensagem = JSON.parse(data);
      mensagem.IdUsuarioNotificacao = mensagem.Mensagem;

      if(mensagem.IdUsuario == sessao.Codigo){
        this.notificacao(mensagem);
        this.qtdNotificacoes++;
      }
    });

    this.notificacao(new NotificacaoRequest({IdUsuario: sessao.Codigo}));
  }

  logout(): void {
		this.sessaoService.remover();
		this.router.navigateByUrl("/login");
	}

  notificacao(request?: NotificacaoRequest){
    this.usuarioNotificacao.notificaoes(request).subscribe((data) => {
      this.notificacoes = data.map(x => {
        if(x.Notificado == false){
          this.notificacoesService.aviso("Nova mensagem", x.Notificacao.Descricao);
        }
        return x.Notificacao
      });
      this.qtdNotificacoes = this.notificacoes.length;
    })
  }


}
