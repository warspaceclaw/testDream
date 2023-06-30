//conjunto de códigos Dreams. Esse é voltado para os jogadores presentes em campo, sendo estimado a % relacionado a participação deles nas ultimas partidas.
const _ = require("lodash")
const ps = require("prompt-sync")
const prompt = ps()

valorMA = []
valorMC = []
valorDE = []


x = prompt('Ele é atacante, Meio campo ou Defensor? ')

if (x == 'a') { new mediaAtacante }
function mediaAtacante() {

    let MP
    let goal
    let mediaPP

    goal = prompt("Quantos gols ele fez? ")
    MP = prompt("Quantas Partidas ele jogou? ")
    mediaPP = (goal / MP)
    console.log(`a media de g desse jogador é ${mediaPP}`)

    valorMA.push(mediaPP)
    new repetition
    return
}
if (x == 'm') { new mediaMC }
function mediaMC() {

    let MP
    let goal
    let mediaPP

    goal = prompt("Quantos gols+assistencia ele fez? ")
    MP = prompt("Quantas Partidas ele jogou? ")
    mediaPP = (goal / MP)
    console.log(`a media de ga desse jogador é ${mediaPP}`)

    valorMC.push(mediaPP)
    new repetition
    return
}
if (x == 'd') { new mediaDefensor }
function mediaDefensor() {

    let MP
    let goal
    let mediaPP

    goal = prompt("Quantos gc ele esteve presente? ")
    MP = prompt("Quantas Partidas ele jogou? ")
    mediaPP = (goal / MP)
    console.log(`a media de gc desse jogador é ${mediaPP}`)

    valorDE.push(mediaPP)
    new repetition
    return
}
if (x == 'r') { new repetition }
function resultadoDoTime() {
    console.log('----------------------------------------------------------------')
    valorGA = ((_.mean(valorMA)) + (_.mean(valorMC)))
    console.log(valorGA)
    console.log(_.mean(valorDE))



}
function repetition() {
    y = prompt("Quer continuar nessa mesma etapa?(a), Caso não queira só seguir as mesmas instruções do que foi realizado na primeira etapa.(m,d,r) - R -> resultado final")
    if (y == 'a') { new mediaAtacante() }
    if (y == 'm') { new mediaMC() }
    if (y == 'd') { new mediaDefensor() }
    if (y == 'r') { new resultadoDoTime() }
}

