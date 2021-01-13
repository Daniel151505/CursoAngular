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

  nombre: string ='Daniel';
  apellido: string = ' Altamirano';
  edad: number = 15;
  
  //metodo getEdad
getEdad() :number {
  return this.edad;
}

}
