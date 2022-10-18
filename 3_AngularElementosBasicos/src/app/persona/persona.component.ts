import { Component, OnInit } from '@angular/core';
/* Aqui estamos agregando los componentes, pero tambien podemos agregar los documentos
HTML o CSS dentro del documento de TS esto se le denomina INLINE(en linea), pero esto es recomendable
si la informacion es pequeña, pero si es grande se recomienda por archivos separados  */
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
//Implementa la interfaz OnInit la cual nos obliga a implementar un metodo la cual nos ayuda
//para iniciar el componente es como un constructor
export class PersonaComponent {

  //agregamos atributos publicos la cual podremos acceder desde las plantillas
  private nombre: string = 'Juan';
  apellido: string = 'Perez';
  edad: number = 28;

  getNombre():string {
    return this.nombre;
  }

}
