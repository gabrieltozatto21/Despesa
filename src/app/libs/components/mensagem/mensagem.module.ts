import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MensagemComponent,
  ],
  declarations: [MensagemComponent]
})
export class MensagemModule { }
