let dialogIndex = 0;
const dialogTexts = [
    "Olá! Bem-vindo! Clique nos botões para explorar o conteúdo.",
    "Aqui você pode aprender mais sobre igualdade de gênero.",
    "Depois de assistir aos vídeos, faça o quiz para testar seus conhecimentos!",
    "Boa sorte e divirta-se aprendendo!"
];

function toggleDialog() {
    const dialogBox = document.getElementById('dialog-box');
    if (dialogBox.classList.contains('hidden')) {
        dialogBox.classList.remove('hidden');
    } else {
        dialogBox.classList.add('hidden');
    }
}

function nextDialog() {
    const dialogText = document.getElementById('char-dialog');
    dialogIndex++;
    if (dialogIndex >= dialogTexts.length) {
        dialogIndex = 0;
    }
    dialogText.textContent = dialogTexts[dialogIndex];
}