//conjunto de códigos Dream. Esse é voltado para calcular quantos gols foram feitos/marcados contra a equipe em relação a quantas partidas foram jogadas.
const _ = require("lodash")
const ps = require("prompt-sync")
const prompt = ps()

var valorDaPA = []
var valorDaPB = []
new calcularValorA

function calcularValorA() {
    console.log("----------------------------------------------------------------")
    console.log('Time A')
    let gscored = prompt('Gols marcados pelo time ')
    let gagainst = prompt('Gols sofridos pelo time ')
    let mp = prompt('Quantas partidas foram jogas até o momento ')

    let valorFinalGS = (gscored / mp)
    let valorFinalGA = (gagainst / mp)

    valorDaPA.push(valorFinalGS, valorFinalGA)
    new calcularValorB
    return
}
function calcularValorB() {
    console.log("----------------------------------------------------------------")
    console.log('Time B')
    let gscored = prompt('Gols marcados pelo time ')
    let gagainst = prompt('Gols sofridos pelo time ')
    let mp = prompt('Quantas partidas foram jogas até o momento ')

    let valorFinalGS = (gscored / mp)
    let valorFinalGA = (gagainst / mp)

    valorDaPB.push(valorFinalGS, valorFinalGA)
    new repeat
    return
}


function repeat() {
    console.log('----------------------------------------------------------------')
    console.log(`valor de GS e GA do time A ${valorDaPA}`)
    console.log(`valor de GS e GA do time B ${valorDaPB}`)
    x = prompt('Quer fazer um novo calculo? (s ou n)')
    valorDaPA = []
    valorDaPB = []
    if (x == 's') {
        new calcularValorA
    }
    if (x == 'n') {

    }

}