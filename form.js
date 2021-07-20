var botao = document.querySelector("#adicionar-aluno");

botao.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-alunos");
    console.log(form)
    var nome = form.nome.value;
    var note1 = form.nota1.value;
    var note2 = form.nota2.value;
    var note3 = form.nota3.value;
    var Aluno_Tr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var note1Td = document.createElement("td");
    var note2Td = document.createElement("td");
    var note3Td = document.createElement("td");
    var media = document.createElement("td");
    var situacao = document.createElement("td");
    var media1 = calculaMedia(note1, note2, note3)
    nomeTd.textContent = nome;
    note1Td.textContent = note1;
    note2Td.textContent = note2;
    note3Td.textContent = note3;
    media.textContent = media1;
    situacao.textContent = situacaoFinal(media1);
    Aluno_Tr.appendChild(nomeTd);
    Aluno_Tr.appendChild(note1Td);
    Aluno_Tr.appendChild(note2Td);
    Aluno_Tr.appendChild(note3Td);
    Aluno_Tr.appendChild(media);
    Aluno_Tr.appendChild(situacao);
    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(Aluno_Tr);
})
