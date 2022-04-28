import { Sessao } from 'src/app/libs/core/models/sessao';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SessaoService } from 'src/app/libs/core/services/sessao.service';
import { LoginRequest } from 'src/app/core/models/login.request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = environment.config.apis.despesa

  constructor(
    private http: HttpClient,
    private sessaoService: SessaoService
  ) { }

  public autenticar(request: LoginRequest): Observable<Sessao>{
    return this.http.post<Sessao>(this.urlBase + "usuarios/autenticar", request)
      .pipe(
        tap((response: Sessao) => {
          this.sessaoService.registrar(response)
        })
      );
  }
}
