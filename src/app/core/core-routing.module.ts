import { LoginComponent } from './paginas/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from 'src/app/core/paginas/inicio/inicio.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { AutenticacaoGuard } from 'src/app/libs/core/guards/autenticacao.guard';

const rotas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'inicio',
        canActivate: [AutenticacaoGuard],
        component: InicioComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
