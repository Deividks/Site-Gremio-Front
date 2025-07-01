import ApiConetion from "./api.js"
const api = new ApiConetion()

const btnForm = document.querySelector("#btnAdd")

btnForm.addEventListener("click", async () => {
    const inputNome = document.querySelector("#input-nome")
    const inputEmail = document.querySelector("#input-email")
    const inputT_Mens = document.querySelector("#input-tipo")
    const inputDirecionamento = document.querySelector("#input-diretorias")
    const inputMensagem = document.querySelector("#input-mensagem")
    
    const nome = inputNome.value
    const email = inputEmail.value
    const tipo_manifestacao = inputT_Mens.value
    const direcionamento = inputDirecionamento.value
    const mensagem = inputMensagem.value

    console.log(nome)
    console.log(email)
    console.log(tipo_manifestacao)
    console.log(direcionamento)
    console.log(mensagem)

    const dados = {
        nome, email, tipo_manifestacao, direcionamento, mensagem
    }

    await api.cadastra(dados)

    inputNome.value = ""
    inputEmail.value = ""
    inputT_Mens.value = ""
    inputDirecionamento.value = ""
    inputMensagem.value = ""
})


//Script do carrosel
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
});
