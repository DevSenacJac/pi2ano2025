
const titulo = document.getElementById('titulo')
const ingredientes = document.getElementById('ingredientes')
const img_receita1 = document.getElementById('img_receita1')
const img_receita2 = document.getElementById('img_receita2')
const preparo = document.getElementById('preparo')
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const main = document.querySelector('main')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const btn_voltar = document.getElementById('btn_voltar')
const logo = document.getElementById('logo')

btn_voltar.addEventListener('click', () => {
    window.location.href = '../../index.html'
})

logo.addEventListener('click', () => {
    window.location.href = '../../index.html'
})

async function MontarPagina() {
    const receita = await axios.get(`https://pi2ano2025-1.onrender.com/buscar/${id}`)

    titulo.innerHTML = receita.data.titulo
    ingredientes.innerHTML = receita.data.ingredientes
    img_receita1.src = receita.data.fotos
    img_receita2.src = receita.data.videos
    preparo.innerHTML = receita.data.modo_preparo
    
    if (id == '0' || id == '1' || id == '5' || id == '7' || id == '8' || id == '12' || id == '13' || id == '14') {
        main.style.border = 'solid 5px #ffe972'
        img1.style.boxShadow = '0 5px 10px 5px #94845a'
        img2.style.boxShadow = '0 5px 10px 5px #94845a'
    } else {
        main.style.border = 'solid 5px #9bc7dd'
        img1.style.boxShadow  = '0 5px 10px 5px #0c355b'
        img2.style.boxShadow  = '0 5px 10px 5px #0c355b'
    }
}

MontarPagina()