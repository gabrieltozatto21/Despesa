import { Injectable, EventEmitter } from "@angular/core";
import * as signalR from "@microsoft/signalr";
import { HubConnection } from "@microsoft/signalr";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MyHubConnectionService {

    private urlBase = environment.config.hubs.notificacao
    private _hubConnection: HubConnection | undefined;

    public evento: EventEmitter<any> = new EventEmitter();

    constructor(){

    }

    public conectar(cookie: any){

        this._hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(this.urlBase , {
        accessTokenFactory: () => {
            return cookie.Jwt
        }

        })
        .configureLogging(signalR.LogLevel.None)
        .build();

        this._hubConnection
        .start()
            .then(() => {
                console.info("Connected")
            })
        .catch((err) => console.error(err.toString()));


        this.iniciar();
    }


    public iniciar(){
        this._hubConnection.on("Notificar", data => {
            this.evento.emit(data);
        });
    }
}
