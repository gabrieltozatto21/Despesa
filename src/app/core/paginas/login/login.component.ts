
import { LoginRequest } from 'src/app/core/models/login.request';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from 'src/app/core/services/login.service';
import { Sessao } from 'src/app/libs/core/models/sessao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.iniciaFormLogin();
  }

  iniciaFormLogin(){
    this.loginForm = this.formBuilder.group({
      Login: ["", Validators.required],
			Senha: ["", Validators.required]
    })
  }

  enviar(){
    this.spinner.show();

    const loginRequest = new LoginRequest(this.loginForm.value);
    this.loginService.autenticar(loginRequest)
      .subscribe({
        next: (response: Sessao) => {
          this.spinner.hide();
          this.route.navigateByUrl("/inicio")

        },
        complete: () => {
          this.spinner.hide();
        },
        error: () => {
          this.spinner.hide();
        }
      });

  }

}
