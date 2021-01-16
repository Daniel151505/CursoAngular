import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { personasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Agregando los servicios en el constructor
  constructor(private loggingService:LoggingService, private personasService:personasService ) {
  
  //Receptor de los datos y mostrandolos en una alerta
  this.personasService.saludar.subscribe(
    (nombreInput : string) => alert("El apellido es: " + nombreInput))

  }

  title = 'Nuevo Usuario';
  // Creando nuevo atributo con su respectivo valor
  saludo = 'Saludos Usuario';
  titulo='';
  producto='';
  

//Agregando metodo 
modificarTitulo(event: Event){
//Haciendo conversión(<HTMLInputElement>event.target).value
this.titulo= (<HTMLInputElement>event.target).value

}


}
