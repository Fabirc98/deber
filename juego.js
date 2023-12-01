`use strict`

function Jugador(nickname, vidas, valorDeCarta) {
    this.nickname= nickname;
    this.vidas = vidas;
    this.valorDeCarta = valorDeCarta;
  
    // Método para reducir las vidas
    this.reducirVidas = function (cantidad) {
      this.vidas -= cantidad;
      if (this.vidas < 0) {
        this.vidas = 0; 
      }
    };
    this.vidasrestantes = function () {
      alert(`Nombre: ${this.nickname}, Vidas restantes: ${this.vidas}`);
    };
  }
  let jugador1 = new Jugador("Fabi", 5, 3);
  jugador1.vidasrestantes();
  
  jugador1.reducirVidas(2);
  
  jugador1.vidasrestantes();


  let etiquetajudador1 = document.getElementById("player1");
  etiquetajudador1.innerHTML= `Jugador uno: ${this.nickname="FABI"}`;


  
