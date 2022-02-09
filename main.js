'use strict'

// Declarando as variáveis e chamando-as do html
const lampada = document.getElementById('lampada')
const desligar = document.getElementById('desligar')
const ligar = document.getElementById('ligar')
const piscar = document.getElementById('piscar')
let idPiscar = null;

// Função para validar se a lampada esta quebrada 
const lampadaQuebrada = () => {
    return lampada.src.includes('quebrada')
} 

// Função para ligar a lampada
const ligarLampada = () => {
    // Validação para não ligar se a lampada já estiver quebrada
    if(!lampadaQuebrada()){
        lampada.src = './img/ligada.jpg'
    }
}

// Função para desligar a lampada
const desligarLampada = () => {
    // Validação para não desligar se a lampada já estiver quebrada
    if(!lampadaQuebrada()){
        lampada.src = './img/desligada.jpg'
    }
}

// Função para quebrar a lampada
const quebrarLampada = () => lampada.src = './img/quebrada.jpg'

// Função para validar se a lampada esta desligada 
const lampadaDesligada = () => {
    return lampada.src.includes('desligada')
}

// Função para quando a lampada estiver desligada ela ligar na ação do botão piscar
const ligarDesligar = () => {
    if(lampadaDesligada()){
        ligarLampada()
    }else{
        desligarLampada()
    }    
}

// Função para piscar a lampada
const piscarLampada = () => {
    // método assícrona: os dados podem ser transmitidos intermitentemente em um fluxo estável.

    // setTimeout: A functiona ser executado após o temporizador expirar.
    // setTimeout(ligarLampada, 1000)

    // Condição para executar apenas após o click no botão Pisar e para parar depois.
    if(idPiscar == null){
    // método chama uma função em intervalos especificados (em milissegundos)
    idPiscar = setInterval(ligarDesligar, 500)
    piscar.textContent = 'Parar'
    }else{
        clearInterval(idPiscar)
        piscar.textContent = 'Piscar'
        idPiscar = null
    }

}

// Eventos dos clicks dos botões, no caso mudar a imagem da lampada.
ligar.addEventListener('click', ligarLampada)
desligar.addEventListener('click', desligarLampada)
piscar.addEventListener('click', piscarLampada)
//dbl (dois clicks no botão)
lampada.addEventListener('dblclick', quebrarLampada)
