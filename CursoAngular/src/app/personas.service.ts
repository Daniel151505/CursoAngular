import { Injectable } from "@angular/core";
import { Persona } from "./empleados/empleados.model";
import { LoggingService } from "./LoggingService.service";

//Injectando el servicio de Logging Service a este servicio
@Injectable()
export class personasService {
    constructor(private loggingService: LoggingService) {
        
    }

    personas: Persona[] = [
        new Persona('Jhon','Soto'),
        new Persona('Sara','Connor')
      ];


      agregarEmpleado(empleado1 : Persona){
        
        //Agregando los datos al arreglo empleado
        this.personas.push(empleado1)

        //Usando el servicio de logging service
        this.loggingService.enviarMernsajeConsola('agregamos persona:' + empleado1.apellido)
        }

}