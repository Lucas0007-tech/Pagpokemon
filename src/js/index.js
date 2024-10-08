
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.
querySelector(".imagem-botao")

for (let i = 0; i < pokemons.length; i++) {
    // Geração dos cards
}

botaoAlterarTema.addEventListener("click", () =>{
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) { imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
        } else {
            imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
        }
});






