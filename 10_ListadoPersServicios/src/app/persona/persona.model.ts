export class Persona{
  /*
  nombre: string = '';
  apellido: string = '';
  // es importante especificar el tipo de dato que recibira el constructor
  constructor(nombre: string, apellido: string){
    this.nombre = nombre;
    this.apellido = apellido;
  } */

  //sintaxis simplificada, pero lo mismo que el anterior y de manera automatica typeScript crea los atributos
  //y los inicializa
  constructor(public nombre:string, public apellido: string){

  }
}
