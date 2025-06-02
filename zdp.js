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







const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const pauseBtn = document.getElementById('pauseBtn');

let index = 0;
let isPaused = false;
let interval;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    dots[idx].classList.remove('active');
  });

  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  if (isPaused) {
    stopAutoSlide();
    pauseBtn.textContent = '▶️';
  } else {
    startAutoSlide();
    pauseBtn.textContent = '⏸️';
  }
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

showSlide(index);
startAutoSlide();
