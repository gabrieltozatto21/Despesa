import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SessaoService } from "../../services/sessao.service";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor{

  constructor(private readonly sessaoService: SessaoService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      var _user = this.sessaoService.recuperar();
      const dupReq = req.clone({
         headers: req.headers.set('authorization', (_user && _user.Jwt) ? 'Bearer ' + _user.Jwt : '')
      });
      return next.handle(dupReq);
  }

}
