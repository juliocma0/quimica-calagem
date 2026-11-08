package calagem

import scala.util.Random

enum TipoParticula {
    case Hidrogenio
    case Aluminio
    case Calcario
    case Carbonato
    case Calcio
    case DioxidoCarbono
    case Agua
}

case class Particula (
    tipo        : TipoParticula,
    var x       : Double,
    var y       : Double,
    var vx      : Double,
    var vy      : Double,
    var idade   : Double = 0.0,
    var vivo    : Boolean = true
)

object Particula {
    def criar               (
        tipo: TipoParticula ,
        x: Double           ,
        y: Double           ): Particula = 
    {
        Particula(
            tipo, x, y, 
            Random.between(-25.0, 25.0),
            Random.between(-25.0, 25.0)
        )
    }
}