package calagem

import org.scalajs.dom

object Main {
    def main(args: Array[String]): Unit = {
        val largura = 400
        val altura = 400

        val canvas = dom.document.createElement("canvas")
            .asInstanceOf[dom.HTMLCanvasElement]
        canvas.width = largura
        canvas.height = altura
        canvas.className = "simulacao"
        dom.document.body.appendChild(canvas)

        val simulacao = new Simulacao(largura.toDouble, altura.toDouble)
        val renderizador = new Renderizador(canvas, simulacao)

        simulacao.reiniciar()

        val interface = new Interface(simulacao, renderizador)

        interface.iniciar()
    }
}