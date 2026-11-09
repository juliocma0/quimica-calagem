package calagem

import org.scalajs.dom
import org.scalajs.dom.HTMLElement
import org.scalajs.dom.HTMLButtonElement

class Interface                 (
    simulacao: Simulacao        ,
    renderizador: Renderizador  )
{
    private var ultimoTempo = 0.0

    private val painel = dom.document.createElement("div")
        .asInstanceOf[dom.HTMLDivElement]

    private val informacoes = dom.document.createElement("div")
        .asInstanceOf[dom.HTMLDivElement]

    private val pHEscala = dom.document.createElement("div")
        .asInstanceOf[dom.HTMLDivElement]

    private val pHMarca = dom.document.createElement("div")
        .asInstanceOf[dom.HTMLDivElement]

    private val pHRotulo = dom.document.createElement("div")
        .asInstanceOf[dom.HTMLDivElement]

    private val pHTexto = dom.document.createElement("span")
        .asInstanceOf[dom.HTMLSpanElement]

    private val hidrogenioTexto = dom.document.createElement("span")
        .asInstanceOf[dom.HTMLSpanElement]

    private val reacoesTexto = dom.document.createElement("span")
        .asInstanceOf[dom.HTMLSpanElement]

    private val velocidades = Array(1.0, 2.0, 4.0)

    private var idxVelocidade = 0

    private def velocidadeAtual: Double =
        velocidades(idxVelocidade)

    private var pausado = false

    def iniciar(): Unit = {
        criarControles()
        atualizarInformacoes()
        renderizador.renderizar()
        dom.window.requestAnimationFrame(
            (tempoAtual: Double) => animar(tempoAtual))
    }

    private def criarControles(): Unit = {
        painel.className = "painel-controles"
        informacoes.className = "informacoes"
        pHCriarEscala()

        hidrogenioTexto.textContent = "H⁺: --"
        reacoesTexto.textContent = "Reações: --"

        informacoes.appendChild(hidrogenioTexto)
        informacoes.appendChild(reacoesTexto)

        painel.appendChild(informacoes)

        val botoes =
            dom.document.createElement("div").asInstanceOf[dom.HTMLDivElement]

        botoes.className = "botoes"

        val botaoCalcario = criarBotao("Adicionar calcário") {
            simulacao.adicionarCalcario(5)
        }

        var botaoPausa: HTMLButtonElement = null
        botaoPausa = criarBotao("Pausar") {
            pausado = !pausado
            simulacao.ativo = !pausado

            if (pausado) {
                botaoPausa.textContent = "Continuar"
            } else {
                botaoPausa.textContent = "Pausar"
            }
        }

        val botaoReiniciar = criarBotao("Reiniciar") {
            simulacao.reiniciar()
            pausado = false
            simulacao.ativo = true
            botaoPausa.textContent = "Pausar"
            ultimoTempo = 0.0
            atualizarInformacoes()
            renderizador.renderizar()
        }

        var botaoVelocidade: HTMLButtonElement = null
        botaoVelocidade = criarBotao("Velocidade: 1x") {
            idxVelocidade = (idxVelocidade + 1) % velocidades.length
            botaoVelocidade.textContent = s"Velocidade: ${velocidadeAtual}x"
        }

        botoes.appendChild(botaoCalcario)
        botoes.appendChild(botaoPausa)
        botoes.appendChild(botaoReiniciar)
        botoes.appendChild(botaoVelocidade)

        painel.appendChild(botoes)

        val simulacaoContainer = dom.document.getElementById("simulacao-container")
        simulacaoContainer.appendChild(painel)
    }

    private def criarBotao(texto: String)(acao: => Unit): dom.HTMLButtonElement = {
        val botao = dom.document.createElement("button")
            .asInstanceOf[dom.HTMLButtonElement]
        
        botao.textContent = texto

        botao.className = "botao"
        botao.onclick = (_: dom.MouseEvent) => acao
        botao
    }

    private def pHCriarEscala(): Unit = {
        pHEscala.className = "ph-escala"

        pHMarca.className = "ph-marca"
        pHEscala.appendChild(pHMarca)

        pHRotulo.className = "ph-rotulo"

        for (valor <- 0 to 14) {
            val rotulo = dom.document.createElement("span")
                .asInstanceOf[dom.HTMLSpanElement]
            
            rotulo.textContent = valor.toString
            pHRotulo.appendChild(rotulo)
        }

        pHTexto.textContent = "pH: --"
        informacoes.appendChild(pHTexto)

        painel.appendChild(pHEscala)
        painel.appendChild(pHRotulo)
    }

    private def atualizarInformacoes(): Unit = {
        val pH = simulacao.pHAtual
        val pHLimitado = math.max(0.0, math.min(14.0, pH))
        val posicao = (pHLimitado / 14.0) * 100.0
        
        pHTexto.textContent = f"pH: $pH%.2f"
        hidrogenioTexto.textContent = s"H⁺: ${simulacao.qtdHidrogenio}"
        reacoesTexto.textContent = s"Reações: ${simulacao.totalReacoes}"
        pHMarca.style.left = s"$posicao%"
    }

    private def animar(tempoAtual: Double): Unit = {
        val dt = if (ultimoTempo == 0.0) 0.0 
                else (tempoAtual - ultimoTempo) / 1000.0
            
        ultimoTempo = tempoAtual

        simulacao.atualizar(dt * velocidadeAtual);
        renderizador.renderizar()
        atualizarInformacoes()

        dom.window.requestAnimationFrame(
            (tempoAtual: Double) => animar(tempoAtual))
    }
}