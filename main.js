// Variáveis da aplicação

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick) 
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', clickKeyEnter)

//Funções
function handleTryClick(event) {
  event.preventDefault() // Define para não fazer o padrão
  const inputNumber = document.querySelector("#inputNumber")
  if (inputNumber.value.trim() === "") { //Verifica se algum número foi digitado
    alert("Por favor, insira um número!") // Da um alerta caso nenhum número foi digitado
  } else if(inputNumber.value >= 0 && inputNumber.value <=10) { // verifica se o número digita está dentro 0 a 10!   
  if (Number(inputNumber.value) == randomNumber) { // Compara o número digitado com o número aleatorio
    toggleScreen() // Aplica a função togglescreen ou seja caso número esteja correto muda de página através do hide.
    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas` // modifica na outra página o número de tentativas.
  }
  xAttempts++ // Soma as tentativas
  } else {
    alert("Este número não está dentro do intervalo sugerido de 0 a 10!")
  }
  inputNumber.value = ""
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1 // Reseta o número de tentativas
  randomNumber = Math.round(Math.random() * 10) // Cria outro número aleatorio após acertar
}

function toggleScreen () {   // Função que muda a tela colocando hide!!
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function clickKeyEnter(keyboard) {
  if(keyboard.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}