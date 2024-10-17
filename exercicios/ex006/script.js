function parouimpar() {
    let n = Number(num.value)
    if (n % 2 == 0) {
        msg.innerHTML = `<p>O número ${n} é <strong>PAR</strong>.</p>`
    } else {
        msg.innerHTML = `<p>O número ${n} é <strong>ÍMPAR</strong>.</p>`
    }
    resultado.style.display = 'block'
}

function voltar() {
    resultado.style.display = 'none'
    ano.value = ''
    ano.focus()
}