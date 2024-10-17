function apresentacao() {
    let n = nome.value;
    msg.innerHTML = `<p>&#x1F596; Olá, <strong>${n}</strong>! Você está curtindo o Tecn'n'Coffee? &#x2615;</p>`;
    resultado.style.display = 'block';
}

function esconder() {
    resultado.style.display = 'none';
    nome.value = '';
    nome.focus()
}