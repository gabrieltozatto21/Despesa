import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaListagemComponent } from './paginas/despesa-listagem/despesa-listagem.component';
import { DespesaCadastroComponent } from './paginas/despesa-cadastro/despesa-cadastro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listar'
  },
  {
    path: 'listar',
    component: DespesaListagemComponent
  },
  {
    path: 'cadastrar',
    component: DespesaCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
