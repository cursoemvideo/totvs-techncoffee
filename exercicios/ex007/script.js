function classificar() {
    let i = Number(idade.value)
    let tipo = ''
    if (i <= 9) {
        tipo = 'Fraldinha'
    } else if (i <= 13) {
        tipo = 'Mirim'
    } else if (i <= 15) {
        tipo = 'Infantil'
    } else if (i <= 19) {
        tipo = 'Infanto-Juvenil'
    } else if (i <= 30) {
        tipo = 'Adulto'
    } else {
        tipo = 'Veterano'
    }
    msg.innerHTML = `Com ${i} anos você é da categoria <strong>${tipo}</strong>`
    resultado.style.display = 'block'
}

function voltar() {
    resultado.style.display = 'none'
    ano.value = ''
    ano.focus()
}