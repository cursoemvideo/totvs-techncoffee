function somar() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let s = n1 + n2
    msg.innerHTML = `<p>A soma entre ${n1} e ${n2} é igual a ${s}</p>`
    resultado.style.display = 'block'
}

function voltar() {
    resultado.style.display = 'none'
    num1.value = ''
    num2.value = ''
    num1.focus()
}