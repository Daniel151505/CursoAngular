import { Component, OnInit } from '@angular/core';
import { Persona } from './empleados.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 //Declaración de Variable
  titulos: string ='Listado de empleados'

  //Creando Arreglo
  personas: Persona[] = [
    new Persona('Jhon','Soto'),
    new Persona('Sara','Connor')
  ];

  //Declaración de Variables
  apellidoInput: string = '';
  nombreInput: string='';

  //Metodo Agregar Empleado
  agregarEmpleado(){

  //Jalando datos de apellidoInput y nombreInput
  let empleado1 = new Persona(this.nombreInput, this.apellidoInput)
  
  //Agregando los datos al arreglo personas
  this.personas.push(empleado1)
  }


}
