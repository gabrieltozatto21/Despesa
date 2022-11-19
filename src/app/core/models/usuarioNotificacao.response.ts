import { NotificacaoResponse } from './notificacao.response';
import { Notificacao } from "src/app/libs/core/models/notificacao";
import { Sessao } from "src/app/libs/core/models/sessao";

export class UsuarioNotificacao {
    public id: string;
    public UsuarioAcesso?: Sessao;
    public Notificacao: NotificacaoResponse;
    public Notificado: boolean;
    public Visualizado: boolean;

    constructor(usuarioNotificacao: Partial<UsuarioNotificacao>) {
        this.id = usuarioNotificacao.id;
        this.UsuarioAcesso = usuarioNotificacao.UsuarioAcesso;
        this.Notificacao = usuarioNotificacao.Notificacao;
        this.Notificado = usuarioNotificacao.Notificado;
        this.Visualizado = usuarioNotificacao.Visualizado;
    }
  }
