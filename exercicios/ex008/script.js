function contar(inicio, fim) {
    let cont = inicio
    msg.innerHTML = ''
    while (cont <= fim) {
        msg.innerHTML += `${cont} &#x1F449; `
        cont++
    }
    msg.innerHTML += `FIM`
    resultado.style.display = 'block'
}

function voltar() {
    resultado.style.display = 'none'
}