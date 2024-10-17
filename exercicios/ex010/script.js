let numeros = new Array(1, 5, 3, 2)
mostraVetor()

function mostraVetor() {
    vetor.innerHTML = ''
    if (numeros.length == 0) {
        vetor.innerHTML = '<td>Vetor Vazio</td>'
    } else {
        for (let p = 0; p < numeros.length; p++) {
            vetor.innerHTML += `<td>${numeros[p]}</td>`
        }
    }
}

function adicionar(n) {
    n = Number(n)
    let pos = numeros.indexOf(n)
    if (pos == -1) {
        numeros.push(n)
        mostraVetor()
    } else {
        alert(`Você já tem ${n} no vetor`)
    }
    num.value = ''
    num.focus()
}

function remover(n) {
    n = Number(n)
    let pos = numeros.indexOf(n)
    if (pos == -1) {
        alert(`Não encontrei o número ${n} no vetor`)
    } else {
        numeros.splice(pos, 1)
        mostraVetor()
    }
}