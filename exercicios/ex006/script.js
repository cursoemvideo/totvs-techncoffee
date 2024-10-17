function calcularidade() {
    let nasc = Number(ano.value)
    let calendario = new Date()
    let atual = calendario.getFullYear()
    let idade = atual - nasc
    msg.innerHTML = `<p>Quem nasceu em ${nasc} fará ${idade} anos em ${atual}.</p>`
    resultado.style.display = 'block'
}

function voltar() {
    resultado.style.display = 'none'
    ano.value = ''
    ano.focus()
}