package calagem

import scala.collection.mutable.ArrayBuffer
import scala.util.Random

class Simulacao         (
    val largura: Double ,
    val altura: Double  ) 
{
    val particulas = ArrayBuffer[Particula]()

    private val pHInicial               = 4.0
    private val qtdHidrogenioInicial    = 40
    private val qtdAluminioInicial      = 8
    private val raioReacao              = 60.0

    private val acelAleatoriaMin        = -15.0
    private val acelAleatoriaMax        = 15.0

    private val velocidadeMin           = -60.0
    private val velocidadeMax           = 60.0

    private val margemColisao           = 12.0
    private val deslocamentoProduto     = 8.0

    private val margemInicial           = 30.0
    private val margemCalcario          = 40.0

    private val alturaInicialMin        = 50.0

    private val alturaCalcarioMin       = 5.0
    private val alturaCalcarioMax       = 45.0

    private val tempoDissolucao         = 1
    private val tempoVidaProdutos       = 3.0
    private val passoMax                = 0.05

    private val pHPontoMaxAluminio      = 7.0
    private val conversaoAluminioMax    = 0.8
    private val pHPrecipitacaoAluminio  = 5.0

    var ativo = true
    var totalReacoes = 0


    def qtdHidrogenio: Int =
        particulas.count(p => p.vivo && p.tipo == TipoParticula.Hidrogenio)

    def pHAtual: Double =
        Quimica.estimarPH(pHInicial, qtdHidrogenioInicial, qtdHidrogenio)

    private def distancia   (
        a: Particula        ,
        b: Particula        ): Double = math.hypot(a.x - b.x, a.y - b.y)


    def reiniciar(): Unit = {
        particulas.clear()
        totalReacoes = 0
        ativo = true

        for (i <- 0 until qtdHidrogenioInicial) {
            particulas += Particula.criar(
                TipoParticula.Hidrogenio,
                x = Random.between(margemInicial, largura - margemInicial),
                y = Random.between(alturaInicialMin, altura - margemInicial)
            )
        }
        for (i <- 0 until qtdAluminioInicial) {
            particulas += Particula.criar(
                TipoParticula.Aluminio,
                x = Random.between(margemInicial, largura - margemInicial),
                y = Random.between(alturaInicialMin, altura - margemInicial)
            )
        }
    }

    def adicionarCalcario(qtd: Int): Unit = {
        for (i <- 0 until math.max(0, qtd)) {
            particulas += Particula.criar(
                TipoParticula.Calcario,
                x = Random.between(margemCalcario, largura - margemCalcario),
                y = Random.between(alturaCalcarioMin, alturaCalcarioMax)
            )
        }
    }

    private def dissolver(calcario: Particula): Unit =
        calcario.vivo = false

    private def criarProdutosCalcario(calcario: Particula): Unit = {
        particulas += Particula.criar(
            TipoParticula.Carbonato,
            calcario.x,
            calcario.y
        )

        particulas += Particula.criar(
            TipoParticula.Calcio,
            calcario.x,
            calcario.y
        )
    }

    private def reagir(): Unit = {
        val carbonatos = particulas.filter(
            p => p.vivo && p.tipo == TipoParticula.Carbonato
        ).toList

        for (carbonato <- carbonatos if carbonato.vivo) {
            val hidrogenioProximo = particulas.filter(
                p => p.vivo && p.tipo == TipoParticula.Hidrogenio &&
                distancia(p, carbonato) < raioReacao
            ).sortBy(p => distancia(p, carbonato))
            .take(2)

            if (hidrogenioProximo.size == 2) {
                carbonato.vivo = false
                hidrogenioProximo.foreach(_.vivo = false)

                particulas += Particula.criar(
                    TipoParticula.DioxidoCarbono,
                    carbonato.x,
                    carbonato.y
                )
                particulas += Particula.criar(
                    TipoParticula.Agua,
                    carbonato.x + deslocamentoProduto,
                    carbonato.y
                )
                totalReacoes += 1
            }
        }
    }

    private def reagirAluminio(passo: Double): Unit = {
        val pHFator = (
            (pHAtual - pHPrecipitacaoAluminio) / 
            (pHPontoMaxAluminio - pHPrecipitacaoAluminio)
        ).max(0.0).min(1.0)

        val taxa = conversaoAluminioMax * pHFator
        val probabilidade = 1.0 - math.exp(-taxa * passo)

        val aluminios = particulas.filter(
            p => p.vivo && p.tipo == TipoParticula.Aluminio
        ).toList

        for (aluminio <- aluminios if (aluminio.vivo && 
            Random.nextDouble() < probabilidade)) 
        {
            aluminio.vivo = false
            particulas += Particula.criar(
                TipoParticula.HidroxidoAluminio,
                aluminio.x,
                aluminio.y
            )
            totalReacoes += 1
        }
    }

    private def atualizarPasso(passo: Double): Unit = {
        particulas.foreach { p =>
            p.idade += passo
            p.vx += Random.between(acelAleatoriaMin, acelAleatoriaMax) * passo
            p.vy += Random.between(acelAleatoriaMin, acelAleatoriaMax) * passo

            p.vx = p.vx.max(velocidadeMin).min(velocidadeMax)
            p.vy = p.vy.max(velocidadeMin).min(velocidadeMax)

            p.x += p.vx * passo
            p.y += p.vy * passo

            if (p.x < margemColisao || p.x > largura - margemColisao) {
                p.vx = -p.vx
                p.x = p.x.max(margemColisao).min(largura - margemColisao)
            }
            if (p.y < margemColisao || p.y > altura - margemColisao) {
                p.vy = -p.vy
                p.y = p.y.max(margemColisao).min(altura - margemColisao)
            }
        }

        val calcariosDissolvidos = particulas.filter(
            p => p.vivo && p.tipo == TipoParticula.Calcario &&
            p.idade > tempoDissolucao
        ).toList

        calcariosDissolvidos.foreach(dissolver)
        particulas.filterInPlace(_.vivo)

        calcariosDissolvidos.foreach(criarProdutosCalcario)

        reagir()
        reagirAluminio(passo)

        particulas.filterInPlace { p =>
            p.vivo && 
            (p.tipo != TipoParticula.DioxidoCarbono &&
            p.tipo != TipoParticula.Agua) ||
            p.idade <= tempoVidaProdutos
        }
    }

    def atualizar(dt: Double): Unit = {
        if (!ativo) return

        var restante = math.max(0.0, dt)

        while (restante > 0.000000001) {
            val passo = math.min(restante, passoMax)
            atualizarPasso(passo)
            restante -= passo
        }
    }
}