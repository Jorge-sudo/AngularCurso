
import { Component } from '@angular/core';

/*Este es un decorador llamado Component que esta definido en la libreria de angular */
@Component({
  selector: 'app-root', //definimos el nombre del componente primcipal
  templateUrl: './app.component.html',//indicamos el documento HTML que se utilizara
  styleUrls: ['./app.component.css']//indicamos el documento CSS que se utilizara
})
export class AppComponent {
  //Estos son  atributos que se uiliza en el Archivo componente.html
  title = 'Aplicacion de Calculadora';
  //TAMBIEN ESTOS COMPONENTES SE PUEDEN CREAR DESDE LA CONSOLA UTILIZANDO CLI(comando de angular)
  sumaA: any;
  sumaB: any;
  resultado: any;

  //este metodo se llamara cuando le demos click al boton sumar
  sumar():void {
    this.resultado = this.sumaA + this.sumaB;
  }
}

