function tabuada(n) {
    n = Number(n)
    msg.innerHTML = ''
    let cont = 1
    while (cont <= 10) {
        msg.innerHTML += `${n} x ${cont} = <strong>${n * cont}</strong><br>`
        cont++
    }
    resultado.style.display = 'block'
}

function voltar() {
    resultado.style.display = 'none'
    num.value = ''
    num.focus()
}