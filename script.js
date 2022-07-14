/* Pega os elementos pelo ID */
var personagem = document.getElementById("personagem");
var bloco = document.getElementById("bloco");
var pontuacao = 0
/* Função para fazer o personagem pular */
function pular() {
    /* SE a classe do personagem for diferent de "animar" então é adicionada essa classe */
    if (personagem.classList != "animar") {
        personagem.classList.add("animar");
    }
    /* O setTimeout() é uma função do js para definir em quanto tempo uma função será executada */
    setTimeout(function () {
        /* A cada 500ms após a função pular for acionada, a classe "animar" será removida */
        personagem.classList.remove("animar")
    }, 500);
}
/* Ao contrário do setTimeout() que é executado apenas uma vez, o setInterval() executa a função a cada tempo */
var checkDead = setInterval(function () {
    /* getComputedStyle() é usado para obter todas as propriedades e valores CSS calculados do elemento especificado */
    /* A interface do método CSSStyleDeclaration.getPropertyValue() retorna uma string contendo o valor de uma propriedade CSS especificada. */
    let personagemTop = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"));
    let blocoLeft = parseInt(window.getComputedStyle(bloco).getPropertyValue("left"));
    /* Verficar se o personagem colidiu com o bloco */
    if (blocoLeft < 20 && blocoLeft > -20 && personagemTop >= 130) {
        bloco.style.animation = "none";
        alert("Você perdeu, aperte F5 para recomeçar!");
    } else {
        pontuacao++;
        document.getElementById("pontos").innerHTML = "SCORE: " + pontuacao;
    };
}, 10);

var temaEscuro = setInterval(function () {
    document.getElementById("jogo").style.background="rgb(36, 35, 35)";
}, 5000);

var temaClaro = setInterval(function () {
    document.getElementById("jogo").style.background="white";
}, 10000)