import { PersonaService } from './../personas.services';
import { LoggingService } from './../LoggingService.service';
import { Persona } from './../persona.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //agregamos el proveedor de loogging service para poder utilizar el console.info
  //providers: [LoggingService]
})
export class FormularioComponent implements OnInit{


  nombreInput:string = '';
  apellidoInput:string = '';

  persona:Persona ;

  /*vamos a injectar la clase LoggingService, aun que podriamos crear una instancia(objeto) de
  la clase, realmente los servicios no se utilizan de esa manera sino que los servicios se
  injectan a travez del constructor, utilizando el concepto de DI(Dependency Injection)*/
  constructor(private loggingService:LoggingService,
              private personasService:PersonaService){//de esta manera angular injecta por automatico
    //ademas de injectarlo en el constructor necesitamos agregarlo tambien como parte de este componente

    //nos suscribimos en el elemento saludar recibimos el indice y mandamos una alerta
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + (indice+1) )
    )
  }

  ngOnInit(){

  }

  agregarPersona():void{
    //estamos agregando el nombre de ViewChild y el apellido recibimos en el metodo
    this.persona = new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviarMensajeConsola("Enviamos Persona= Nombre:" + this.persona.nombre
           // + ", Apellido: " + this.persona.apellido);
    //con emit emite un evento enviamos la informacion a la clase padre
    //this.personaCreada.emit(this.persona);
    this.personasService.agregarPersona(this.persona);

  }

}
