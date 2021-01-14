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

  titulos='Listado de empleados'
  personas: Persona[] = [
    new Persona('Jhon','Soto'),
    new Persona('Sara','Connor')
  
  ];

}
