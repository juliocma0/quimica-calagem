import org.scalajs.dom

object Main {
    def main(args: Array[String]): Unit = {
        val heading = dom.document.createElement("h1");
        heading.textContent = "Oi, Calagem sou eu!"

        dom.document.body.appendChild(heading)
    }
}