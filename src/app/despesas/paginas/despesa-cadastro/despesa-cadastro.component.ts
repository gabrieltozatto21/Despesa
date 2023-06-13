import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-despesa-cadastro',
  templateUrl: './despesa-cadastro.component.html',
  styleUrls: ['./despesa-cadastro.component.css']
})
export class DespesaCadastroComponent implements OnInit {

  despesaForm: FormGroup;
  regraContrato: FormGroup;

  jsonRegra: string;

  private grupo = {
    Condicao: ['', Validators.required],
    Regras: this.formBuilder.array([])
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();

    this.regraContrato = this.formBuilder.group(this.grupo);
  }

  iniciarFormulario(){
    this.despesaForm = this.formBuilder.group({
      descricao: ['', Validators.required],
      regraContrato: this.regraContrato
    });
  }

  atualizarJsonRegra(){
    // this.jsonRegra = JSON.stringify(this.regraContrato.value)
  }


}
