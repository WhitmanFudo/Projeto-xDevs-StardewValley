
//Declarei todas as variaveis que necessitei
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//Adicionando o evento de passar a imagem quando clica na seta
btnAvancar.addEventListener("click", function (){
    const eOUltimoCartao = cartaoAtual === cartoes.length - 1;
    if(eOUltimoCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
   });


//Adicionando o evento de voltar a imagem quando clica na seta
btnVoltar.addEventListener("click", function (){

    const eOPrimeiroCartao = cartaoAtual === 0;
    if(eOPrimeiroCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();

    });

//Funções para evitar repetições
function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

// Função para mudar o fundo a cada 3 cliques
let clickCount = 0;
const backgrounds = ['fundo-base-1.png', 'fundo-base-2.png', 'fundo-base-3.png', 'fundo-base-4.png', 'fundo-base-5.png'];
let fundoAtual = 0;

const body = document.body;
const btnFundo = document.getElementById("btn-fundo");

btnFundo.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 1) {
    clickCount = 0;
    fundoAtual = (fundoAtual + 1) % backgrounds.length;
    body.style.backgroundImage = `url('src/imagens/${backgrounds[fundoAtual]}')`;
  }
});