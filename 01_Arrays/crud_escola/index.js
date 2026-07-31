const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

function menu(){
    console.log("ESCOLA");
    console.log("1 - Cadastrar Alunos");
    console.log("2 - Listar Alunos");
    console.log("3 - Editar Aluno");
    console.log("4 - Excluir Aluno");
    console.log("5 - Buscar Aluno pelo Nome");
    console.log("6 - Mostrar Aprovados");
    console.log("7 - Mostrar Reprovados");
    console.log("8 - Sair");

    prompt.question("Digite uma opção: ", answer =>{
        const opcao = Number.parseInt(answer);

        switch(opcao) {

            case 1:
                cadastrarAlunoMenu();
                break;

            case 2:
                listarMenu();
                break;
                

            default: console.log("Digite uma opção válida!");
        }
    })
}

const alunos = [];

function cadastrarAluno(nome,idade,curso,nota){
    const aluno = {
        id: alunos.length +1,
        nome: nome,
        idade: idade,
        curso: curso,
        nota: nota,
    }

    alunos.push(aluno);
}

function cadastrarAlunoMenu(){
    prompt.question("Digite o nome do aluno: ", answer =>{
        const nome = answer;

        if(nome == ("")){
            console.log("Digite um nome!");
            menu();
        } else {
            prompt.question("Digite a idade do aluno: ", answer =>{
                const idade = Number.parseInt(answer);

                if(isNaN(idade) || idade <=0 || idade == ""){
                    console.log("Digite uma idade válida!");
                    menu();
                } else {
                    prompt.question("Digite o curso: ", answer =>{
                        const curso = answer;

                        if(curso == ""){
                            console.log("Digite um curso válido!");
                            menu();
                        } else {
                            prompt.question("Digite a nota: ", answer =>{
                                const nota = Number.parseFloat(answer);

                                if(isNaN(nota) || nota <=0 || nota ==""){
                                    console.log("Digite uma nota válida!");
                                    menu();
                                } else {
                                     cadastrarAluno(nome,idade,curso,nota);
                                     console.log("Aluno cadastrado!");
                                     menu();
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

function listar(){
    if(alunos.length < 0){
        console.log("Nenhum registro encontrado!");
    } else {
        for(let i =0; i < alunos.length; i++){
            console.log(alunos[i]);
        }
    }
}

function listarMenu(){
    listar();
    menu();
}



menu()