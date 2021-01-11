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
}
