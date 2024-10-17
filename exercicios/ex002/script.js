function apresentacao() {
    let nome = window.prompt('Qual é o seu nome?');
    msg.innerHTML = `<p>&#x1F596; Olá, <strong>${nome}</strong>! Você está curtindo o Tecn'n'Coffee? &#x2615;</p>`;
    resultado.style.display = 'block';
}

function esconder() {
    resultado.style.display = 'none';
}