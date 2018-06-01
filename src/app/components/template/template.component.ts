import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: "Curro",
    apellido: "Martin",
    email: "fcocurrelas@gmail.com",
    pais:"",
    sexo:"",
    acepta:false
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ES",
    nombre: "España"
  }
  ]

  sexos:string[] = ["Hombre", "Mujer", "No se sabe bien..."]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("ngForm", forma);
    console.log("Valor de la forma", forma.value);

    console.log("Usuario", this,this.usuario);
    
    
  }

}
