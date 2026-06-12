var listaPerguntas = [
    { pergunta: "Qual é a minha sobremesa e comida favorita no mundo?", opcoes: ["Bolo de chocolate e hambúrguer", "Sorvete e churrasco", "Pudim e pizza", "Mousse de limão e sushi"], correta: 2 },
    { pergunta: "Qual é o meu filme favorito para assistir junto com você?", opcoes: ["Como se fosse a primeira vez", "Como mágica", "Diário de uma paixão", "Questão de tempo"], correta: 1 },
    { pergunta: "Qual é o nosso destino dos sonhos para viajar juntos?", opcoes: ["Paris", "Orlando", "Suíça", "Maldivas"], correta: 2 },
    { pergunta: "O que eu mais gosto de fazer no fim de semana?", opcoes: ["Ficar jogando videogame", "Dormir o dia inteiro", "Sair com os amigos", "Ficar junto com você"], correta: 3 }
];
var perguntaAtual = 0; var acertosDiretos = 0; var errouTentativaAtual = false;
function carregarQuiz() {
    var box = document.getElementById("quiz-box"); if (!box) { return; } errouTentativaAtual = false;
    if (perguntaAtual >= listaPerguntas.length) {
        var barraCoracoes = "❤️ ♡ ♡ ♡ ♡";
        box.innerHTML = "<div class=\"quiz-score-hearts\">" + barraCoracoes + "</div>" +
                        "<div class=\"quiz-result-title\">" + acertosDiretos + " de 5 acertos</div>" +
                        "<div class=\"quiz-result-subtitle\">Muito bom! Você completou o nosso teste! 💕</div>" +
                        "<button class=\"quiz-retry-btn\" onclick=\"reiniciarQuiz()\">🔄 Jogar de novo</button>";
        return;
    }
    var dados = listaPerguntas[perguntaAtual]; var opcoesHTML = "";
    dados.opcoes.forEach(function(opcao, index) {
        opcoesHTML += "<div class=\"quiz-option\" onclick=\"verificarQuiz(this, " + index + ")\">" +
                      "<span class=\"quiz-circle\"></span>" +
                      "<span class=\"quiz-text\" style=\"font-family: sans-serif; color: #e4dcd3;\">" + opcao + "</span>" +
                      "</div>";
    });
    box.innerHTML = "<div class=\"quiz-header\" style=\"text-align: left;\">PERGUNTA " + (perguntaAtual + 1) + " / " + listaPerguntas.length + "</div>" +
                    "<div class=\"quiz-question\" style=\"text-align: left;\">" + dados.pergunta + "</div>" +
                    opcoesHTML +
                    "<div id=\"quiz-alert\" style=\"margin-top:15px; font-family:sans-serif; font-size:14px; text-align:center;\"></div>";
}
function reiniciarQuiz() { perguntaAtual = 0; acertosDiretos = 0; carregarQuiz(); }
function verificarQuiz(elemento, indiceSelecionado) {
    var dados = listaPerguntas[perguntaAtual]; var alerta = document.getElementById("quiz-alert");
    document.querySelectorAll(".quiz-option").forEach(function(opt) {
        opt.style.borderColor = "rgba(255,255,255,0.05)"; opt.querySelector(".quiz-circle").style.backgroundColor = "transparent";
    });
    if (indiceSelecionado === dados.correta) {
        elemento.style.borderColor = "#4caf50"; elemento.querySelector(".quiz-circle").style.backgroundColor = "#4caf50";
        if (alerta) { alerta.innerHTML = "<span style=\"color: #4caf50; font-weight: bold;\">✨ Resposta Certa!</span>"; }
        if (!errouTentativaAtual) { acertosDiretos++; } perguntaAtual++; setTimeout(carregarQuiz, 1200);
    } else {
        elemento.style.borderColor = '#e04a68'; elemento.querySelector('.quiz-circle').style.backgroundColor = '#e04a68';
        if (alerta) { alerta.innerHTML = "<span style=\"color: #e04a68;\">❌ Tente novamente...</span>"; } errouTentativaAtual = true;
    }
}
carregarQuiz();
