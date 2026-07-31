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

            case 3:
                editarAlunoMenu();
                break;

            case 4:
                excluirAlunoMenu();
                break;

            case 5:
                buscarAlunoNomeMenu();
                break;

            case 6:
                listarAlunosAprovadosMenu();
                break;

            case 7:
                listarAlunosReprovadosMenu();
                break;

            case 8: console.log("Programa encerrando!");
            prompt.close();
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
    if(alunos.length <= 0){
        console.log("Nenhum registro encontrado!");
        menu();
    } else {
        for(let i =0; i < alunos.length; i++){
            console.log(alunos[i]);
            if(alunos[i].nota >= 6){
                console.log("Aluno aprovado!");
            } else {
                console.log("Aluno reprovado!");
            }
        }
    }
}

function listarMenu(){
    listar();
    menu();
}

function editarALuno(id, novoNome, novaIdade, novoCurso, novaNota){
    if(alunos.length <= 0){
        console.log("Nenhum registro encontrado!");
        menu();
    } else {
        for(let i =0; i < alunos.length; i++){
            if(id == alunos[i].id){
                alunos[i].nome = novoNome;
                alunos[i].idade = novaIdade;
                alunos[i].curso = novoCurso;
                alunos[i].nota = novaNota;

                return true;
            }
        } return false;
    }
}

function editarAlunoMenu(){
    prompt.question("Digite o ID do aluno: ", answer =>{
        const id = Number.parseInt(answer);

        if(isNaN(id) || id <=0 || id == ""){
            console.log("Digite um ID válido!");
            menu();
        } else {
            prompt.question("Digite o novo nome: ", answer =>{
                const novoNome = answer;

                if(novoNome == ""){
                    console.log("Digite um nome!");
                    menu();
                } else {
                    prompt.question("Digite uma nova idade: ", answer =>{
                        const novaIdade = Number.parseInt(answer);

                        if(isNaN(novaIdade) || novaIdade <=0 || novaIdade == ""){
                            console.log("Digite uma idade válida!");
                            menu();
                        } else {
                            prompt.question("Digite um novo curso: ", answer =>{
                                const novoCurso = answer;

                                if(novoCurso == ""){
                                    console.log("Digite um curso!");
                                    menu();
                                } else {
                                    prompt.question("Digite uma nova nota: ", answer =>{
                                        const novaNota = Number.parseInt(answer);

                                        if(isNaN(novaNota) || novaNota <=0 || novaNota == ""){
                                            console.log("Digite uma nota!");
                                            menu();
                                        } else {
                                            const editou = editarALuno(id, novoNome, novaIdade, novoCurso, novaNota);

                                            if(editou){
                                                console.log("Aluno editado!");
                                                menu();
                                            } else {
                                                console.log("ID não encontrado!");
                                                menu();
                                            }
                                        }
                                    });
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

function excluirAluno(id){
    if(alunos.length <= 0){
        console.log("Nenhum registro encontrado!");
        menu();
    } else {
        for(let i = 0; i < alunos.length ; i++){
            if(id == alunos[i].id){
                alunos.splice(i, 1);
                return true;
            }
        } return false
    }
}

function excluirAlunoMenu(){
    prompt.question("Digite o ID: ", answer => {
        const id = Number.parseInt(answer);

        if(isNaN(id) || id <= 0 || id == ""){
            console.log("Digite um ID válido!");
            menu();
        } else {
            const excluiu = excluirAluno(id);

            if(excluiu) {
                console.log("Aluno excluido!");
                menu();
            } else {
                console.log("ID não encontrado!");
                menu();
            }
        }
    })
}

function buscarAlunoNome(nome){
    if(alunos.length <= 0){
        console.log("Nenhum registro encontrado!");
        menu();
    } else {
        for(let i = 0; i < alunos.length; i++){
            if(alunos[i].nome == nome){
                console.log(alunos[i]);

                return true;
            }
        } return false;
    }
}

function buscarAlunoNomeMenu(){
    prompt.question("Digite o nome do aluno: ", answer =>{
        const nome = answer;

        if(nome == ""){
            console.log("Digite um nome!");
            menu();
        } else {
            const buscou = buscarAlunoNome(nome);

            if(buscou){
                menu();
            }
                else 
                    {
                console.log("Aluno não encontrado!");
                menu();
            }
        }
    })
}

function listarAlunosAprovados() {
    if(alunos.length <= 0){
        console.log("Nenhum registro encontrado!");
        menu();
    } else {
        for(let i =0; i < alunos.length; i++){
            if(alunos[i].nota >= 6){
                console.log(alunos[i]);

            }
        } 
    }
}

function listarAlunosAprovadosMenu(){
    listarAlunosAprovados();
    menu();
}

function listarAlunosReprovados(){
       if(alunos.length <= 0){
        console.log("Nenhum registro encontrado!");
        menu();
    } else {
        for(let i =0; i < alunos.length; i++){
            if(alunos[i].nota < 6){
                console.log(alunos[i]);

            }
        } 
    }
}

function listarAlunosReprovadosMenu(){
    listarAlunosReprovados();
    menu();
}

menu()