import { buscarDestinosAPI } from "./api.js";
import { containerDestinos, loading, botaoMais } from "./dom.js";
import { criarCard } from "./cards.js";

let todosOsPaises = [];
let limiteAtual = 6;
const QUANTIDADE = 6;

// função que desenha os cards na tela
function renderizarPaises() {
    const paisesParaMostrar = todosOsPaises.slice(
        limiteAtual - QUANTIDADE,
        limiteAtual
    );

    paisesParaMostrar.forEach(pais => {
        const card = criarCard(pais);
        containerDestinos.appendChild(card);
    });
}

// primeira carga da página
async function iniciar() {
    loading.style.display = "block";

    try {
        todosOsPaises = await buscarDestinosAPI();
        renderizarPaises();
    } catch (erro) {
        console.error("Erro ao buscar destinos:", erro);
        loading.textContent = "Erro ao carregar destinos.";
    } finally {
        loading.style.display = "none";
    }
}

// clique no botão "Carregar mais"
botaoMais.addEventListener("click", async () => {
    loading.style.display = "block";
    limiteAtual += QUANTIDADE;
    renderizarPaises();
    loading.style.display = "none";

    if (limiteAtual >= todosOsPaises.length) {
        botaoMais.disabled = true;
        botaoMais.textContent = "Não há mais países";
    }
});

iniciar();


