//atributos cor e modelo; metodo levantarVoo

//objeto literal
let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a380',
    levantarVoo: console.log('Levantar Voo')
}

// funcao construtora

let AviaoF = function() {
    this.cor = 'Azul'
    this.modelo = 'Boeing 878'
    this.levantarVoo = function() {console.log('Levantar Voo') }
}

let a2 = new AviaoF()

class AviaoC {
    constructor() {
        this.cor = 'Vermelho'
        this.modelo = 'Embraer E-Jets'
    }

    levantarVoo() {
        console.log('Levantar Voo')
    }
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)