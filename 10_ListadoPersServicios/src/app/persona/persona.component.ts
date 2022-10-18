import { PersonaService } from './../personas.services';
import { Persona } from './../persona.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  //con @Input recibimos informacion desde el componente padre

  //agregamos los siguiente atributos para pasar informacion desde el componente padre
  @Input() persona:Persona ;

  @Input() indice: number;

  //inyectamos personaServices para enviar el saludo
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    //esto que emitiremos enviaremos a formulario.component.ts y ahi nos suscribimos
    this.personaService.saludar.emit(this.indice);
  }

}
