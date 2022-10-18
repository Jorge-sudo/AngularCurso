import { Persona } from './persona/persona.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';

  //EMPEZAMOS A TRABAJAR CON LOS OBJETOS DE TIPO PERSONA

  //declaramos un arreglo de tipo persona
  personas: Persona[] = [ new Persona('Juan', 'Perez'), new Persona('Laura', 'Juarez'),
          new Persona('Karla', 'Lara')];

  nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona():void{
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    //push es para agregar personas
    this.personas.push(persona);
  }
}
