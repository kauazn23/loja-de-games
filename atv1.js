export default class Game{
    constructor(titulo, genero, plataforma, preco){
        this.titulo = titulo
        this.genero = genero
        this.plataforma = plataforma
        this.preco = preco
        this.notas = []
    }
    adicionarNota(nota){
        this.notas.push(nota)
    }
    mediaNotas(){
        if (this.notas.length === 0) return 0

        let soma = this.notas.reduce((total, n) => total + n, 0)
        return soma / this.notas.length
    }
    detalhes(){
        return `${this.titulo} - Nota: ${this.mediaNotas().toFixed(1)}`
    }}
class GameFisico extends Game{
    constructor(titulo, genero, plataforma, preco, edicao, usadoNovo){
        super(titulo, genero, plataforma, preco)
        this.edicao = edicao
        this.usadoNovo = usadoNovo
    }}
class GameDigital extends Game{
    constructor(titulo, genero, plataforma, preco, tamanhoGB, drm){
        super(titulo, genero, plataforma, preco)
        this.tamanhoGB = tamanhoGB
        this.drm = drm
    }}
class GameIndependente extends Game{
    constructor(titulo, genero, plataforma, preco, desenvolvedor, engine){
        super(titulo, genero, plataforma, preco)
        this.desenvolvedor = desenvolvedor
        this.engine = engine
    }}
class Jogador{
    constructor(nome){
        this.nome = nome
        this.biblioteca = []
    }
    comprar(game){
        this.biblioteca.push(game)
        return `${this.nome} comprou ${game.titulo}`
    }
    avaliar(game, nota) {
        if (!this.biblioteca.includes(game)){
            return "Você não possui esse jogo."
        }
        game.adicionarNota(nota)
        return `${this.nome} avaliou ${game.titulo} com nota ${nota}`
    }
    recomendacoes(){
        return this.biblioteca
            .filter(game => game.mediaNotas() >= 4)
            .map(game => game.detalhes())
    }}
class Sistema{
    constructor(){
        this.jogos = []
    }
    adicionarJogo(game){
        this.jogos.push(game)
    }
    ranking(){
        return this.jogos
            .sort((a, b) => b.mediaNotas() - a.mediaNotas())
            .map(game => game.detalhes())
    }}