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

  @Input() indice: number ;

  constructor() { }

  ngOnInit(): void {
  }

}
