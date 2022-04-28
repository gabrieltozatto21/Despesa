export class LoginRequest {
  public Login?: string;
  public Senha?: string;

  constructor(login: Partial<LoginRequest>) {
      this.Login = login.Login;
      this.Senha = login.Senha;
  }
}
