export class Sessao {
	public Nome?: string;
	public Token?: string;
	public Jwt?: string;
	public CodigoEmpresa?: number;
	public CodigoUsuario?: number;
	public Empresa?: string;
	public Login?: string;

	constructor(params?: Partial<Sessao>) {
		this.Nome = params?.Nome;
		this.Token = params?.Token;
		this.Jwt = params?.Jwt;
		this.CodigoEmpresa = params?.CodigoEmpresa;
		this.CodigoUsuario = params?.CodigoUsuario;
		this.Empresa = params?.Empresa;
		this.Login = params?.Login;
	}

	hasToken(): boolean {
		return this.Token ? true : false;
	}

	hasJwt(): boolean {
		return this.Jwt ? true : false;
	}
}
