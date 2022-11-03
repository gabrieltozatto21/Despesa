import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
import { SessaoService } from 'src/app/libs/core/services/sessao.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private urlBase = environment.config.hubs.notificacao
  private _hubConnection: HubConnection | undefined;

  constructor(private sessaoService: SessaoService) { }

  ngOnInit(): void {

    const cookie = this.sessaoService.recuperar();

    console.log(cookie);

    this._hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(this.urlBase , {
      accessTokenFactory: () => {
        return cookie.jwt
       }

    })
    .configureLogging(signalR.LogLevel.Trace)
    .build();

    this._hubConnection
      .start()
        .then(() => {
          console.info("Connected")
        })
      .catch((err) => console.error(err.toString()));

    this._hubConnection.on("Notificar", data => {
        console.log(data);
    });



  }

}
