function obtendoDados() {
    const arrayDados = document.querySelectorAll("p.col-lg-1")
    const dados = Array.from(arrayDados).map(element => element.innerHTML)
    let mp = parseInt(dados[0])
    let gTotal = parseInt(dados[1])
    let aTotal = parseInt(dados[2])
    console.log(dados)
    mtotal = ((gTotal + aTotal) / mp)
    console.log(mtotal)
}
obtendoDados()