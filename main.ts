const tela = require("readline-sync")
function main() {
	let loop = true

	while(loop){

console.log("1- Cadrastar aluno\n 2- Adicionar Notas\n3-Listar\n0-sair")
 const opcao:string  = tela.question("Deseja continuar?")
 if(opcao === "0")loop = false
	 swicth(opcao){
		 case"0":
		 loop = false
		 break
		 case"1":
		 break
		 case"2":
		 break
		 default
		   console.log("Opçã invada!")
		 break
}
}
main()
