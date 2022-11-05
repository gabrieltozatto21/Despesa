import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessaoService } from 'src/app/libs/core/services/sessao.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  usuario: string = ""

  constructor(private sessaoService: SessaoService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.sessaoService.recuperar().nome
  }

  logout(): void {
		this.sessaoService.remover();
		this.router.navigateByUrl("/login");
	}
}
