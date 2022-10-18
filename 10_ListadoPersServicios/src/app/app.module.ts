import { PersonaService } from './personas.services';
import { LoggingService } from './LoggingService.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //Aqui en providers podemos agregar el LoggingService para todos los componentes en general y 
  //no tener que agregar uno por uno component
  providers: [LoggingService,
              PersonaService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
