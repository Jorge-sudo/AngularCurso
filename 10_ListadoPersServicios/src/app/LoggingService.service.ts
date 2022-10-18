export class LoggingService{
  /*lo que haremos es definir un metodo para imprimir la infomacion que recibamos desde otros lados,
  otras clases, ya que queremos centralizar el servicio de logging, el servicio que envia informacion
  a la consola */

  enviarMensajeConsola(mensaje: string){
    console.log(mensaje);
  }
}