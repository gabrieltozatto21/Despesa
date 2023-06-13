import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesaListagemComponent } from './paginas/despesa-listagem/despesa-listagem.component';
import { DespesaCadastroComponent } from './paginas/despesa-cadastro/despesa-cadastro.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { QueryBuilderComponent } from './components/query-builder/query-builder.component';


@NgModule({
  declarations: [
    DespesaListagemComponent,
    DespesaCadastroComponent,
    QueryBuilderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    DespesasRoutingModule
  ]
})
export class DespesasModule { }
