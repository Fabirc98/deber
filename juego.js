`use strict`

function Jugador(apodo, vidas, valorDeCarta) {
    this.apodo = apodo;
    this.vidas = vidas;
    this.valorDeCarta = valorDeCarta;
  
    // Método para reducir las vidas
    this.reducirVidas = function (cantidad) {
      this.vidas -= cantidad;
      if (this.vidas < 0) {
        this.vidas = 0; 
      }
    };
    this.mostrarInfo = function () {
      alert(`Apodo: ${this.apodo}, Vidas restantes: ${this.vidas}`);
    };
  }
  const jugador1 = new Jugador("Player1", 5, 3);
  jugador1.mostrarInfo();
  
  jugador1.reducirVidas(2);
  
  jugador1.mostrarInfo();

  