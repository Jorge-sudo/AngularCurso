import { Persona } from './persona.model';
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
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')];

  //en la clase hija indicamos que enviaremos un objeto de tipo persona por lo tanto en
  //este metodo recibiremos el objeto de tipo persona
  personaAgregada(persona:Persona){
    this.personas.push(persona);
    console.info("Ejecutando metodo persona agregada");
  }
}
