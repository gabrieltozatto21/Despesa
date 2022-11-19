import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { UsuarioNotificacao } from "../models/usuarioNotificacao.response";
import { NotificacaoRequest } from "../models/notificacao.request";

@Injectable({
    providedIn: 'root'
})
export class UsuarioNotificacaoService{
    private urlBase = environment.config.apis.despesa

    constructor(
        private http: HttpClient
        ) { }

    notificaoes(request?: NotificacaoRequest): Observable<Array<UsuarioNotificacao>>{
        return this.http.get<Array<UsuarioNotificacao>>(this.urlBase +
          `usuarios-notificacoes?IdUsuario=${request?.IdUsuario}&IdUsuarioNotificacao=${request?.IdUsuarioNotificacao ?? ''}`);
    }
}



