import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent implements OnInit {

  @Input() grupoRaiz: AbstractControl;
  @Output() onRemoveGrupo: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateRegra: EventEmitter<any> = new EventEmitter();

  public operadores = [
    {id:1, name: 'E', value: 'AND'},
    {id:2, name: 'OU', value: 'OR'}
  ]

  public juncoes = [
    {id:1, name: 'CONTÉM', value: 'IN'},
    {id:2, name: 'NÃO CONTÉM', value: 'NOT IN'}
  ]

  private regra = {
    Propriedade: ['', Validators.required],
    Campo: ['', Validators.required],
    Clausula: ['', Validators.required],
    Valor: ['', Validators.required],
  };

  private grupo = {
    Condicao: ['', Validators.required],
    Regras: this.formBuilder.array([])
  }

  get regras(): FormArray {
    return this.grupoRaiz.get("Regras") as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.regras.controls);
   
    this.grupoRaiz.valueChanges.subscribe(() =>{
      this.onUpdateRegra.emit();
    })
  }
  
  adicionarClausula() {
    const clausula = this.formBuilder.group(
      {
        Propriedade: ['', Validators.required],
        Campo: ['', Validators.required],
        Clausula: ['', Validators.required],
        Valor: ['', Validators.required],
      }
    );
    
    this.regras.push(clausula);
  }

  adicionarGrupo(){
    const grupo = this.formBuilder.group(
      {
        Condicao: ['', Validators.required],
        Regras: this.formBuilder.array([])
      }
    );

    this.regras.push(grupo);
  }

  removerGrupo(index: number){
    this.regras.removeAt(index);
  } 

  removerClausula(index: number) {
    this.regras.removeAt(index);
  }

  remover(){
    this.onRemoveGrupo.emit(null);
  }
}
