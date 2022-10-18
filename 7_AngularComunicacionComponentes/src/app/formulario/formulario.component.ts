import { Persona } from './../persona.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //con @Output enviamos informacion a un componente padre
  @Output() personaCreada = new EventEmitter<Persona>(); //esta clase se encarga de enviar un mensaje para el componente padre

  nombreInput:string = '';
  apellidoInput:string = '';

  persona:Persona;

  agregarPersona():void{
    this.persona = new Persona(this.nombreInput, this.apellidoInput);
    //con emit emite un evento enviamos la informacion a la clase padre
    this.personaCreada.emit(this.persona);

    console.info("Ejecutando metodo agregar persona");
  }

}
