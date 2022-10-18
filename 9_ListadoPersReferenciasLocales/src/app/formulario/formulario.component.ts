import { Persona } from './../persona.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //con @Output enviamos informacion a un componente padre
  @Output() personaCreada = new EventEmitter<Persona>(); //esta clase se encarga de enviar un mensaje para el componente padre

  //nombreInput:string = '';
  //apellidoInput:string = '';

  /* ViewChild es un metodo al igual que referencia local pero esta vez haremos una comunicacion directa
  Con los componentes de tipo Input de la siguiente manera */
  @ViewChild('nombreInput') nombreInput: ElementRef ;
  @ViewChild('apellidoInput') apellidoInput: ElementRef ;

  //para volverlos de ElementRef a string
    // this.nombreInput.nativeElement.value

  persona:Persona ;

  agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement):void{
    //estamos agregando el nombre de ViewChild y el apellido recibimos en el metodo
    this.persona = new Persona(this.nombreInput.nativeElement.value, apellidoInput.value);
    //con emit emite un evento enviamos la informacion a la clase padre
    this.personaCreada.emit(this.persona);

    console.info("Ejecutando metodo agregar persona");
  }

}
