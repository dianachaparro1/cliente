'use strict'
var jugadores = [];

class JuegoController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onConectado(nombre){
    try{
      console.log(jugadores.length)
      if(jugadores.length <= 4){
        var jugando = false;
        for( var i = 0; i <= 4; i++){ 
          if ( jugadores[i] == nombre) {
            jugando = true;
          }
        }
        if(!jugando){ jugadores.push(nombre,0); }
        console.log(jugadores.length)
        console.log('jugador ' + nombre + ' conectado.')
        console.log(jugadores)
      }
      if(jugadores.length == 4){
        console.log('jugadores enviados')
        this.socket.broadcastToAll('jugadores', jugadores);
      }
    }catch(e){ console.log(e); }
  }

  onDesconectado(nombre){
    for( var i = 0; i <= 1; i++){ 
      if ( jugadores[i] == nombre) {
        jugadores.splice(i, 2); 
      }
    }
    for( var i = 0; i <= turno.length; i++){ 
      turno.splice(i, 2);
    }

    console.log(jugadores)
    this.socket.broadcastToAll('conectado',jugadores);
    this.socket.broadcast('desconectado',nombre);
  };

  onPregunta(pregunta){
    this.socket.broadcastToAll('pregunta',pregunta);
  }

  onRespondidas(respondidas){
    this.socket.broadcastToAll('respondidas',respondidas);
  }

  onGanador(nombre){
    this.socket.broadcastToAll('ganador',nombre);
  }

  onJugadores(jugadores){
    this.socket.broadcastToAll('jugadores',jugadores);
  }
}

module.exports = JuegoController
