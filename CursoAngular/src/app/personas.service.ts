import { Persona } from "./empleados/empleados.model";

export class personasService {
    constructor() {
        
    }

    personas: Persona[] = [
        new Persona('Jhon','Soto'),
        new Persona('Sara','Connor')
      ];


      agregarEmpleado(empleado1 : Persona){
        
        //Agregando los datos al arreglo empleado
        this.personas.push(empleado1)
        }

}