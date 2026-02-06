export async function buscarDestinosAPI() {
    const url = "https://restcountries.com/v3.1/all?fields=name,flags,capital,region";
    
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Erro na API")
    }

    return await response.json()
}
