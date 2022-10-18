import { PersonaService } from './personas.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas:Persona[] = [];

  constructor(private logginsService: LoggingService,
    private personasServices: PersonaService){

  }
  ngOnInit(): void {
    /*Este metodo se ejecutara despues del constructor entonces una vez que se aya injectado
    el servicio de personasServices entonces podemos inizializar nuestro arreglo de personas */
    this.personas = this.personasServices.personas;
  }

}
