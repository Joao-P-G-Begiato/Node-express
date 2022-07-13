const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const arr = []

function pergunta(name) {
    if(name !== "SAIR" && name !== "sair") {
        arr.push(name)
        readline.question("Digite uma propriedade de CSS: ", pergunta)
    } else {
        readline.close()
        const result = arr.sort()
        console.log( "\n Lista de propriedades CSS:")
        for(let i = 0; i < result.length; i++) {
            console.log(result[i])
        }
    }
}

readline.question("Digite uma propriedade de CSS:" , pergunta)