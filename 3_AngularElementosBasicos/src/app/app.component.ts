
import { Component } from '@angular/core';

/*Este es un decorador llamado Component que esta definido en la libreria de angular */
@Component({
  selector: 'app-root', //definimos el nombre del componente primcipal
  templateUrl: './app.component.html',//indicamos el documento HTML que se utilizara
  styleUrls: ['./app.component.css']//indicamos el documento CSS que se utilizara
})
export class AppComponent {
  //Estos son  atributos que se uiliza en el Archivo componente.html
  title = 'Mi Primer App en Angular';
}

