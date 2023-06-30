//criando um script para rodar junto com o browser, tirando os blur do site - nesse caso, do footystats
//footystats

const elementoDiv = document.querySelector("div.click-cover")
const elementoA = document.querySelector("a.h2h-premium-messaging")
const atributoBlur = document.querySelector(".h2h-blur")

function retirandoBlur() {
    elementoDiv.remove()
    elementoA.remove()
    atributoBlur.style.filter = "none"
}

if (document.readyState == "interactive") {
    retirandoBlur()
}
console.log("oi! Qualquer duvida ou problema me manda um email: vitorjoo944@gmail.com")