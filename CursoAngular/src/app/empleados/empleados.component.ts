import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { personasService } from '../personas.service';
import { Persona } from './empleados.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private loggingService:LoggingService, private personasService:personasService ) { }

  ngOnInit(): void {
    //Se inicializa el arreglo con el arreglo que esta en personas.service.ts
    this.personas = this.personasService.personas
  }
 //Declaración de Variable
  titulos: string ='Listado de empleados'

  //Creando Arreglo
  personas: Persona[] = [
    // new Persona('Jhon','Soto'),
    // new Persona('Sara','Connor')
  ];

  //Declaración de Variables
  apellidoInput: string = '';
  nombreInput: string='';

  //Metodo Agregar Empleado
  agregarEmpleado(){

      //Jalando datos de apellidoInput y nombreInput
      let empleado1 = new Persona(this.nombreInput, this.apellidoInput)
      //Usando el servicio de Logging Service y mandando dato
      this.loggingService.enviarMernsajeConsola('Enviamos persona '+ empleado1.nombre)
      //Agregando los datos al arreglo empleado
      //this.personas.push(empleado1)
      this.personasService.agregarEmpleado(empleado1)

  }
}
