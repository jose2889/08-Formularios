import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario:object ={
    Nombre: null,
    Apellido: null,
    Correo: null,
    pais: "VE"
  }

  paises = [{
    codigo:"VE",
    nombre: "VENEZUELA"
  },
  {
    codigo:"CL",
    nombre:"CHILE"
  }]

  constructor() { }


  guardar(valor:NgForm){

    console.log("VALOR DE LA FORMA ", valor);
    console.log("VALOR DE LOS CAMPOS: ",valor.value);
    console.log("VALOR DE USUARIO: ", this.usuario);
    
  }

}
