import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 //Variables
  nombre: string ='Daniel';
  apellido: string = ' Altamirano';
  edad: number = 15;
  deshabilitar= false;
  mensaje='No se ha agregado ni una persona'
  
  //metodo getEdad
getEdad() :number {
  return this.edad;
}

//Metodo agregarPersona
agregarPersona(){

  this.mensaje='Persona agregada'

}

  

}
