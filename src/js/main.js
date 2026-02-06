import { buscarDestinosAPI } from "./api.js";
import { containerDestinos, loading } from "./dom.js";
import { criarCard } from "./cards.js";

async function iniciar() {
    loading.style.display = "block";
    try {
        const paises = await buscarDestinosAPI(); //chamada da api e atribuição a constante paises


        paises.slice(0, 6).forEach(pais => {
            const card = criarCard(pais);
            containerDestinos.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro ao buscar destinos:", erro);
        loading.textContent = "Erro ao carregar destinos.";
    } finally {
        loading.style.display = "none";
    }
}

iniciar();


