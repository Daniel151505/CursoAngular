import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
