const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
//Código omitido

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){  
        
        for(let i=0;i <botoes.length;i++){
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("ativo");
           textos[i].classList.add("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

//Código omitido

const contadores = document.querySelectorAll(".contador"); 
const tempoObjetivo1 = new Date("2024-10-05T00;00;00"); 
let tempoAtual = new Date();


contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = tempoFinal / 1000;
    return segundos;
}