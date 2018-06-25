import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent {

  usuario:object ={
    Nombre: null,
    Apellido: null,
    Correo: null
  }
  constructor() { }


  guardar(valor:NgForm){

    console.log("VALOR DE LA FORMA ", valor);
    console.log("VALOR DE LOS CAMPOS: ",valor.value);
    console.log("VALOR DE USUARIO: ", this.usuario);
    
  }

}
