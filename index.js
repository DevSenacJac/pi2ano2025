const MenuDoce = document.getElementById('menu_doce')
const MenuSalgado = document.getElementById('menu_salgado')
const BtnSalgado = document.getElementById('salgada_btn')
const BtnDoce = document.getElementById('doces_btn')
const BtnHome = document.getElementById('home_btn')
const mestre = document.getElementById('mestre')
const mestre2 = document.getElementById('mestre2')
const botoes = document.getElementsByTagName('h6')
const home_btn = document.getElementById('home_btn')
const logo = document.getElementById('logo')

home_btn.addEventListener('click', () => {
    window.location.href = './index.html'
})

logo.addEventListener('click', () => {
    window.location.href = './index.html'
})

BtnDoce.addEventListener('mouseenter', () => {
    MenuDoce.style.display = "flex"

})

MenuDoce.addEventListener('mouseleave', () => {
    MenuDoce.style.display = "none"
})

BtnSalgado.addEventListener('mouseenter', () => {
    MenuSalgado.style.display = "flex"
})

MenuSalgado.addEventListener('mouseleave', () => {
    MenuSalgado.style.display = "none"
})

BtnHome.addEventListener('click', () => {
    window.location.href = "./index.html"
})

var margin = 0
var controle = 0
var margin2 = 0

function Carrossel1() {
    var repeticao = setInterval(() => {
        if (margin == -590){
            clearInterval(repeticao)
        }
        if (margin == -1190){
            clearInterval(repeticao)
        }
        if (margin == -1790){
            clearInterval(repeticao)
        }
        if (margin == -2390){
            clearInterval(repeticao)
        }
        if (margin == -2990){
            clearInterval(repeticao)
        }
        if (margin == -3590){
            clearInterval(repeticao)
        }
        if (margin == -4190){
            clearInterval(repeticao)
        }
        
        margin = margin - 10
        mestre.style.marginLeft = margin + "px"
    }, 10);
}

setInterval (() => {
    if (margin == -4200){
            margin = 0
            mestre.style.marginLeft = margin
    } else {
        Carrossel1()
    }
}, 5000)

function Carrossel2() {
    var repeticao = setInterval(() => {
        if (margin2 == -590){
            clearInterval(repeticao)
        }
        if (margin2 == -1190){
            clearInterval(repeticao)
        }
        if (margin2 == -1790){
            clearInterval(repeticao)
        }
        if (margin2 == -2390){
            clearInterval(repeticao)
        }
        if (margin2 == -2990){
            clearInterval(repeticao)
        }
        if (margin2 == -3590){
            clearInterval(repeticao)
        }
        if (margin2 == -4190){
            clearInterval(repeticao)
        }
        
        margin2 = margin2 - 10
        mestre2.style.marginLeft = margin2 + "px"
    }, 10);
}

setInterval (() => {
    if (margin2 == -4200){
            margin2 = 0
            mestre2.style.marginLeft = margin2
    } else {
        Carrossel2()
    }
}, 5000)

console.log(botoes)

document.addEventListener('click', (event) => {
    const elemento = event.target
    const id = elemento.getAttribute('id')
    for(let x=0; x<botoes.length; x++) {
        if (botoes[x].id == id) {
            window.location.href = `./front-end/paginas/receita.html?id=${id}`
        }
    }
})