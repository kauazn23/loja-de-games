import game from "./atv1.js"

let jogo1 = new GameFisico("God of War", "Ação", "PS5", 250, "Deluxe", "Novo")
let jogo2 = new GameDigital("Minecraft", "Sandbox", "PC", 100, 5, "Steam")
let jogo3 = new GameIndependente("Hollow Knight", "Aventura", "PC", 60, "Team Cherry", "Unity")

let jogador1 = new Jogador("Kaua")

jogador1.comprar(jogo1)
jogador1.comprar(jogo2)

jogador1.avaliar(jogo1, 5)
jogador1.avaliar(jogo2, 4)

let sistema = new Sistema()

sistema.adicionarJogo(jogo1)
sistema.adicionarJogo(jogo2)
sistema.adicionarJogo(jogo3)

console.log(sistema.ranking())
console.log(jogador1.recomendacoes())