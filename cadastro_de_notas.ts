const tela = require("readline-sync")
const { titulo } = require("./utils.ts")

let notas:string[] = []

function telaCadastrarNotas() {
   titulo("CADASTRAR  NOTAS")
ss<F12>
   const n1 = tela.question("informe a primeira nota: ")
   const n2 = tela.question("informe a segunda nota: ")
   const n3 = tela.question("informe a terceira nota: ")


  notas.push(`${n1};${n2},${3}`)

}

export = { telaCadastrarNotas }

