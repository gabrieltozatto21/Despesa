export class NotificacaoResponse {
    public Id: number;
    public DataCriacao: Date;
    public DataExibicao: Date;
    public Descricao: string;
    public Link: string;
    public Ativo: boolean;
    public Tipo: number;

    constructor(notificacao: Partial<NotificacaoResponse>) {
        this.Id = notificacao.Id;
        this.DataCriacao = notificacao.DataCriacao;
        this.DataExibicao = notificacao.DataExibicao;
        this.Descricao = notificacao.Descricao;
        this.Link = notificacao.Link;
        this.Ativo = notificacao.Ativo;
        this.Tipo = notificacao.Tipo;
    }
  }
