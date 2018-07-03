import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


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
        'pasatiempos': new FormArray([new FormControl('leer', Validators.required)]),
        'username': new FormControl('', Validators.required, this.existeUsuario),
        'password1': new FormControl('', Validators.required),
        'password2': new FormControl()



      }
    );
    console.log(this.usuario)

    // this.forma.setValue(this.usuario);

    //tomar en cuenta el context del this
    this.forma.controls['password2'].setValidators([Validators.required, this.noIgual.bind(this.forma)  //en resumen this no es this en la función sino que es this.forma
    ]);

    this.forma.controls['username'].statusChanges.subscribe(data => console.log(data));

    this.forma.controls['correo'].statusChanges.subscribe(data => console.log(data));
  }

  noHernandez(control:FormControl):any{
    if (control.value === "hernandez"){
      return {nohernandez:true}
    }
    return null;
  }

  noIgual(control:FormControl):any{
    //se declara una variable para entender mejor el contexto del this
    let forma:any = this;

    if (control.value !== forma.controls['password1'].value){
      return {noiguales:true}
    }
    return null;
  }

  existeUsuario(control:FormControl):Promise<any> | Observable<any>{
   //validando de forma asincrona, se simula una consulta de usuario a la base de datos
   let promesa = new Promise(
     (resolve,reject) => {
       setTimeout(() => {
         if (control.value === "jose"){
           resolve({ existe:true })
         }else{
           resolve(null)
         }
       }, 3000);
     }
   )
    return promesa;
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
