import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario:Object = {
    nombrecompleto: {
      nombre:'Curro',
      apellido:'Martin'
    },
    correo:'fcocurrelas@gmail.com'
  }

  constructor() {

    console.log(this.usuario);
    
    
    

    this.forma = new FormGroup({
      /* El primer parametro del FormControl es el valor por defecto */

      'nombreCompleto': new FormGroup ({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', Validators.required),
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });
    console.log(this.forma);
  }

  guardarCambios() {
    console.log(this.forma.value);
    
  }

  ngOnInit() {
  }

}
