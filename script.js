const botao = document.getElementById("botaoMusica");

const musicas = [
    {
        nome: "Rock",
        mensagem: "🎸 Que tal ouvir um bom rock hoje?"
    },
    {
        nome: "Pop",
        mensagem: "🎤 O pop está esperando por você!"
    },
    {
        nome: "Hip-Hop",
        mensagem: "🎧 Coloque o beat para tocar!"
    },
    {
        nome: "Eletrônica",
        mensagem: "🎛️ Hora de aumentar o volume!"
    }
];

botao.addEventListener("click", () => {
    const musica = musicas[Math.floor(Math.random() * musicas.length)];

    botao.textContent = musica.mensagem;

    setTimeout(() => {
        botao.textContent = "🎧 Descobrir música";
    }, 3000);
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const genero = card.dataset.genero;

        alert(`Você escolheu o gênero: ${genero} 🎵`);
    });
});
