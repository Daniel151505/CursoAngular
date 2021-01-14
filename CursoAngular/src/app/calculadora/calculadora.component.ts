import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  //Variables
  titulo='Aplicación Calculadora';
  operadorA: number=0;
  operadorB: number=0;
  resultado: number=0; 
  

  //Metodo
  sumar(): void{

    this.resultado = this.operadorA + this.operadorB;
  }

}

 