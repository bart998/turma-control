const tela = require("readline-sync")
let alunos:string[] = []
let nascimento:string[] = []
let contato:string[] = [] 

function telaCadastro() {    
	const nomeAluno:string = tela.question("Nome do Aluno: ")
	const dataNascimento:string = tela.question("Data nascimento: ")
	const contato:string = tela.question("Número do celular")



	const aluno = `${nomeAluno};${dataNascimento};${contato}`

	alunos.push(aluno)
	console.log(alunos)
}



//responsavel em carregas os alunos cadastrados
function telaListaAlunos() {
	for(let i = 0; i < alunos.length; i++) {
		console.log(`${i + 1}. {alunos[i]}`)
  }
}

//responsavel de deixar a função publica
export = { telaCadastro }

