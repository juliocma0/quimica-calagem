package calagem

case class ResultadoReacao (
    hidrogenioConsumido     : Int,
    carbonatoConsumido      : Int,
    calcioProduzido         : Int,
    dioxidoCarbonoProduzido : Int,
    aguaProduzida           : Int
)

object Quimica {
    def neutralizar                 (
        carbonatoDisponivel: Int    ,
        hidrogenioDisponivel: Int   ): ResultadoReacao = 
    {
        require(carbonatoDisponivel >= 0)
        require(hidrogenioDisponivel >= 0)

        val reacoes = math.min(
            carbonatoDisponivel, hidrogenioDisponivel/2)

        ResultadoReacao (
            hidrogenioConsumido     = reacoes * 2,
            carbonatoConsumido      = reacoes,
            calcioProduzido         = reacoes,
            dioxidoCarbonoProduzido = reacoes,
            aguaProduzida           = reacoes
        )
    }

    def estimarPH                   (
        pHInicial: Double           ,
        hidrogenioInicial: Int      ,
        hidrogenioRestante: Int     ): Double = 
    {
        if (hidrogenioRestante <= 0) {
            7.0
        } else {
            val fracao =
                hidrogenioRestante.toDouble /
                hidrogenioInicial.toDouble

            math.min(7.0, pHInicial - math.log10(fracao))
        }
    }
}