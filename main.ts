const tela = require("readline-sync")
const cadastro = require("./src/cadastro_aluno.ts")

// função inicial para chamar as telas
function main() {
	let loop = true //inicializa o loop

	while(loop){ // roda até quando o usuário não digitar '0'
console.log("1- Cadrastar aluno\n 2- Adicionar Notas\n3-Listar\n0-sair")

const opcao:string  = tela.question("Deseja continuar?")

	 switch(opcao){
		 case"0":
		 	loop = false //para parar o loop
		 break
		 case"1":
			cadastro.telaCadastro() 
		 break
		 case"3":
			cadastro.telaCliente 
		 break
		 
		 default:
			 console.log("Opçã invada!")
	 	 break

	}
    }


}
main()
