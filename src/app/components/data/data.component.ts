import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


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
    correo:"jose2889@gmail.com",
    // pasatiempos: ['leer', 'comer', 'dormir']
  }

  constructor() { 
    this.forma = new FormGroup({
        'nombrecompleto': new FormGroup({
          'nombre': new FormControl('' , [Validators.required, Validators.minLength(3)]),
          'apellido': new FormControl('', [Validators.required, this.noHernandez]),

        }),
        'correo': new FormControl('', [Validators.required, Validators.email]),
        'pasatiempos': new FormArray([
          new FormControl('leer', Validators.required)
        ])

      }
    );
    console.log(this.usuario)

    // this.forma.setValue(this.usuario);
  }

  noHernandez(control:FormControl):any{
    if (control.value === "hernandez"){
      return {nohernandez:true}
    }
    return null;
  }

  agregarPasatiempos(){
    (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('', Validators.required))
  }
  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);

    // this.forma.reset({
    //   nombrecompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo: ""
    // });
  }

}
