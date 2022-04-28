import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacoesService } from 'src/app/libs/core/services/notificacoes.service';

@Injectable({
  providedIn: 'root'
})
export class ErrosService {

  constructor(private notificacaoService: NotificacoesService,
    private readonly router: Router) { }

  tratarErro(erro: HttpErrorResponse): void {
    if (erro != null) {
      switch (erro.status) {
        case 500:
          this.notificacaoService.erro('Atenção!', erro.error.Message);
          break;
        case 400:
          this.notificacaoService.informacao('Atenção!', erro.error.Message);
          break;
        case 401: {
          /*
           * Requisições assíncronas que não atualizam a interface em algumas situações a API retorna 401
           * em um formato onde o objeto erro não é criado sendo assim será disparada mensagem padrão para usuários não autenticados
           * permitindo que o redirecionamento para tela de login funcione
           */
          if (erro.error) {
            this.notificacaoService.informacao('Atenção!', erro.error.Message);
          } else {
            this.notificacaoService.informacao(
              'Atenção!',
              this.criarNaoAutorizado().error.Message
            );
          }

          this.router.navigate([''])
          // setTimeout(() => {
          // this.urlService.irParaLoginComRetorno();
          // }, 1000);

          break;
        }
        default:
          console.log('Erro padrão', erro.message);
          break;
      }
    }
  }

  criarNaoAutorizado(): HttpErrorResponse {
    const erro: HttpErrorResponse = new HttpErrorResponse({
      status: 401,
      statusText: 'Unauthorized',
      error: JSON.parse(
        '{ "Message" : "O usuário não está autorizado no sistema." }'
      ),
    });

    return erro;
  }

  emitirNaoAutorizado(): void {
    this.tratarErro(this.criarNaoAutorizado());
  }
}
