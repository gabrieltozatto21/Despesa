import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { ErrosService } from 'src/app/libs/core/services/erros.service';
import { SessaoService } from 'src/app/libs/core/services/sessao.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(
    private readonly erroService: ErrosService,
    private readonly sessaoService: SessaoService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
  {
    if(!this.sessaoService.isRegistrado()){
      this.erroService.emitirNaoAutorizado();
      return false;
    }
    return true;
  }

}
