import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from "./persona.model";

//Ahora veremos como comunicarnos entre componentes utilizando servicios

//debido a que queremos injectar un servicio dentro de este servicio
  //agregamos la anotacion de @Injectable

@Injectable()
export class PersonaService{
  //declaramos un arreglo de tipo persona
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')];

    
    //este atributo se compartira
  saludar = new EventEmitter<number>();


  //inyectamos un servicio dentro de otro en este caso inyectaremos el servicio
  //de LoggingService
  constructor(private loggingService: LoggingService){

  }

  agregarPersona(persona:Persona){
    this.loggingService.enviarMensajeConsola("Agregamos al arreglo a la nueva persona: " + persona.nombre);
    this.personas.push(persona);
  }
}
