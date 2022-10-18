import {  Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  //con @Output enviamos informacion a un componente padre
  @Output() resultadoEnvio = new EventEmitter<number>(); //esta clase se encarga de enviar un mensaje para el componente padre

  titulo: string = 'Aplicacion de Calculadora';

  sumaA: number;
  sumaB: number;
  resultado: number;

  sumar():void{
    this.resultado = this.sumaA + this.sumaB;
    this.resultadoEnvio.emit(this.resultado);
  }

}
