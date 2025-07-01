let Us = "GremioZDP";
let Senha = "zdp@2025";

    const btnLogar = document.querySelector("#btEntrar");

    btnLogar.addEventListener("click", async () => {
      const inputUS = document.querySelector("#input-loguin");
      const inputSenha = document.querySelector("#input-senha");
      const loguin = inputUS.value;
      const senha = inputSenha.value;

      console.log(loguin);
      console.log(senha);

      if (loguin == Us && senha == Senha) {
        document.getElementById("alimentacao").classList.remove("inativa");
        document.getElementById("alimentacao").classList.add("ativa");
        document.getElementById("loguin").classList.remove("ativa");
        document.getElementById("loguin").classList.add("inativa");
      } else {
        alert("Loguin ou Senha incorreta");
      }
    });


import ApiConetion from "./api.js"
const api = new ApiConetion()

async function carregarDados(){

    const dados = await api.listar();

const tbody = document.querySelector("table tbody");

// Limpa qualquer conteúdo existente
tbody.innerHTML = "";

// Itera sobre os dados recebidos e cria as linhas da tabela
dados.forEach(registro => {
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = registro.nome;

    const tdEmail = document.createElement("td");
    tdEmail.textContent = registro.email;

    const tdTipo = document.createElement("td");
    tdTipo.textContent = registro.tipo_manifestacao;

    const tdDirecionamento = document.createElement("td");
    tdDirecionamento.textContent = registro.direcionamento;

    const tdMensagem = document.createElement("td");
    tdMensagem.textContent = registro.mensagem;

    const tdAcao = document.createElement("td");
    tdAcao.appendChild(criarButton(registro.id));

    // Adiciona todas as colunas à linha
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDirecionamento);
    tr.appendChild(tdMensagem);
    tr.appendChild(tdAcao);

    // Adiciona a linha ao tbody
    tbody.appendChild(tr);
});
}

function criarButton(id){
    
    const botao = document.createElement("button");
    botao.textContent = "Deletar";
    botao.classList.add("deletar-linha");
    botao.addEventListener("click", async() => {
        await api.deletar(id)
        carregarDados()
    })
    return botao;
}

carregarDados()