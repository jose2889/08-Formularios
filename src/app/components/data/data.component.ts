import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  usuario:object = {
    nombrecompleto: {
      nombre:"jose",
      apellido:"hernandez"
    },
    correo:"jose2889@gmail.com"
  }

  constructor() { 
    this.forma = new FormGroup({
        'nombrecompleto': new FormGroup({
          'nombre': new FormControl('' , [Validators.required, Validators.minLength(3)]),
          'apellido': new FormControl('', Validators.required),

        }),
        'correo': new FormControl('', [Validators.required, Validators.email])

      }
    );
    console.log(this.usuario)

    this.forma.setValue(this.usuario);
  }

  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);

    this.forma.reset({
      nombrecompleto: {
        nombre: "",
        apellido: ""
      },
      correo: ""
    });
  }

}
