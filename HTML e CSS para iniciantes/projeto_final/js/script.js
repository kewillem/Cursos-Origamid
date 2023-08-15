//ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  const url = location.href;
  const href = link.href;

  if (url.includes(href)){
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById();
    if(elemento){
    elemento.checked = true;
    }
    console.log(elemento); 
}
parametros.forEach(ativarProduto);

//perguntas frequentes
function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", "true");
}

const perguntas = document.querySelectorAll(".perguntas buttom");
function eventosPerguntas(pergunta){
pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

//galeria de bicicleta
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
  const img = event.currentTarget;
  matchMedia("(min-width: 1000px)").matches;
  if(media){
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação
if(window.SimpleAnime){
  new SimpleAnime();
}
