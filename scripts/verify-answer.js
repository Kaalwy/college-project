function verificarRespostas() {
    const respostasCorretas = {
        q1: 'b',
        q2: 'b'
    };

    const respostasUsuario = {
        q1: document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : null,
        q2: document.querySelector('input[name="q2"]:checked') ? document.querySelector('input[name="q2"]:checked').value : null
    };

    let pontuacao = 0;
    let totalPerguntas = Object.keys(respostasCorretas).length;

    if (respostasUsuario.q1 === respostasCorretas.q1) pontuacao++;
    if (respostasUsuario.q2 === respostasCorretas.q2) pontuacao++;

    const resultadoDiv = document.getElementById('resultado');
    
    if (pontuacao === totalPerguntas) {
        resultadoDiv.innerHTML = `<h3>Parabéns! Você acertou todas as perguntas (${pontuacao}/${totalPerguntas})!</h3>`;
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.innerHTML = `<h3>Você acertou ${pontuacao} de ${totalPerguntas} perguntas. Tente novamente!</h3>`;
        resultadoDiv.style.color = "red";
    }

    resultadoDiv.style.display = 'block';
}

function voltarParaHome() {
    window.location.href = 'index.html';
}