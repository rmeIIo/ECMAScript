// um software de marcenaria
// cadeira e sofá

//paradigma procedural

//array de cadeiras
/*let cadeiras = []

cadeiras[0] = []
cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = []
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'


function girar_cadeira(indice) {
    if(cadeiras[indice]['giratoria'] === true) {
        console.log('girou')
    } else {
        console.log('cadeira não é giratória')
    }
}

function adicionar_cadeira(qtde_pernas, giratoria, cor) {
    let cadeira = Array()

    cadeira['qtde_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeira.push(cadeira)
}

adicionar_cadeira(3, false, 'verde')

console.log(cadeiras)
*/

//paradigma de OO
class Cadeira {
    constructor(qtde_pernas, giratoria, cor) {
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        if(this.giratoria === true) {
            console.log('girou')
        } else {
            console.log('cadeira não é giratória')
        }
    }
}

let cadeiras = []
cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))

//cadeira2.girarCadeira()
console.log(cadeiras)