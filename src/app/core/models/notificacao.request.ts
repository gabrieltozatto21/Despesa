export class NotificacaoRequest {
    public IdUsuario?: number;
    public IdUsuarioNotificacao?: number;

    constructor(notificacao: Partial<NotificacaoRequest>) {
        this.IdUsuario = notificacao.IdUsuario;
        this.IdUsuarioNotificacao = notificacao.IdUsuarioNotificacao;
    }
  }
