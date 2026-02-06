export function criarCard(pais) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${pais.flags.png}" alt="Bandeira de ${pais.name.common}">
        <h3>${pais.name.common}</h3>
        <p>Capital: ${pais.capital ? pais.capital[0] : "Não informada"}</p>
        <p>Continente: ${pais.region}</p>
        <button class="btn-interesse" aria-label="Demonstrar interesse no destino">Tenho interesse</button>
        <p class="mensagem"></p>
    `;

    const botao = card.querySelector(".btn-interesse");
    const mensagem = card.querySelector(".mensagem");

    botao.addEventListener("click", () => {
        mensagem.textContent = "Interesse registrado! Entraremos em contato 😊";
        botao.disabled = true;
        botao.textContent = "Interesse enviado";
    });

    return card;
}
