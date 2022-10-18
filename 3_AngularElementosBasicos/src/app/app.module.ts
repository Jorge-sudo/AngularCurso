
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';

/* Todos estos componentes se integraran al index.html */

/* Este es un decorador se utilizan para agregar caracteristicas extras
En este decorador indicamos que componentes utilizaremos en esta aplicacion */
@NgModule({
  //En declarations se importa los componentes
  declarations: [
    AppComponent,
    //Agregamos el componente personas que creamos lo llamamos con el nombre de la clase
    PersonasComponent,
    PersonaComponent
  ],
  //importamos otro modulo para Two way binding bind = enlazar,
  //enlaza la plantilla HTML con el componente de Angula
  imports: [
    BrowserModule,
    FormsModule //importamos forms desde angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

