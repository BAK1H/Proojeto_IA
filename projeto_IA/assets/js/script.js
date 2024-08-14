const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado: "Você é um jovem ativista ambiental que descobriu que uma floresta local está ameaçada por desmatamento e poluição. Sua jornada começa na entrada da floresta. O que você faz?",
      alternativas: [
        {
          texto: "Explorar a área afetada",
          afirmacao: "Você decide explorar a área afetada para entender a extensão dos danos e coletar provas."
        },
        {
          texto: "Procurar aliados na cidade",
          afirmacao: "Você decide ir à cidade para procurar aliados e obter apoio para a causa."
        }
      ]
    },
    {
      enunciado: "Após explorar a área, você encontra uma área devastada com uma fábrica poluente próxima. Ou você pode seguir um caminho que leva a uma comunidade local que depende da floresta. O que você faz?",
      alternativas: [
        {
          texto: "Investigar a fábrica poluente",
          afirmacao: "Você decide investigar a fábrica para descobrir quem está por trás da poluição e como parar isso."
        },
        {
          texto: "Visitar a comunidade local",
          afirmacao: "Você opta por visitar a comunidade local para entender como a destruição da floresta está afetando suas vidas."
        }
      ]
    },
    {
      enunciado: "Depois de investigar a fábrica, você descobre documentos que mostram práticas ilegais de desmatamento. Agora, você precisa decidir como agir para impedir a destruição. O que você faz?",
      alternativas: [
        {
          texto: "Denunciar às autoridades",
          afirmacao: "Você decide denunciar os documentos e as práticas ilegais às autoridades competentes."
        },
        {
          texto: "Organizar uma manifestação",
          afirmacao: "Você opta por organizar uma manifestação para chamar a atenção pública e pressionar os responsáveis."
        }
      ]
    },
    {
      enunciado: "Você também descobre que a comunidade local está lutando contra a perda de seus recursos naturais e precisa de ajuda. Como você decide apoiar a comunidade?",
      alternativas: [
        {
          texto: "Ajudar na criação de um projeto de reflorestamento",
          afirmacao: "Você decide ajudar a comunidade na criação de um projeto de reflorestamento para recuperar a área devastada."
        },
        {
          texto: "Desenvolver um plano de sustentabilidade",
          afirmacao: "Você opta por trabalhar com a comunidade no desenvolvimento de um plano de sustentabilidade para preservar a floresta a longo prazo."
        }
      ]
    }
  ];
  


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();