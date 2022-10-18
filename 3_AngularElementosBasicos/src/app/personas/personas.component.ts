import { Component } from "@angular/core";

/*Definimos nuestra clase y la exportamos */

/*El decorador Component identifica la clase inmediatamente
debajo de ella como una clase componente y especifica sus metadatos. */
@Component({
  //Agregamos atributos

  //Con selector agregamos el nombre de este componente para llamarlo desde otro documento
  selector: 'app-personas',
  /* Agregamos directamente el codigo HTML solo recomendado si es poco codigo sin espacios
   pero si queremos utilizar espacios entonces utilizamos el caracter `` BackTiks
  template: `<h1>Listado de Personas</h1>
  <span>Desde el componente PersonasComponent</span>
  <app-persona></app-persona><app-persona></app-persona>` */

  templateUrl: './personas.component.html',

  styleUrls: ['./personas.component.css']

})
export class PersonasComponent {
  //TAMBIEN ESTOS COMPONENTES SE PUEDEN CREAR DESDE LA CONSOLA UTILIZANDO CLI(comando de angular)
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = '';
  texto = '';

  //este metodo se llamara cuando le demos click al boton
  agregarPersona(){
    this.mensaje = 'Persona agregada';
  }

  //Este metodm recibira una variable de tipo Event
  modificarTitulo(event: Event){
    console.log('Entrando a metodo modificar titulo')
    //target es el elemnto que se ejecuta en ese momento

    //casteamos luego obtenemos el valor con value ya que es un elemento HTML
    this.titulo = (<HTMLInputElement>event.target).value ;
  }
}
