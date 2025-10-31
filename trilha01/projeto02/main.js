import {atletas} from './dadosAtletas.js'; // importa os dados dos atletas
import {Atleta} from './atleta.js'; // importa a classe Atleta

// Loop para criar instâncias de Atleta e exibir seus dados
for (let i = 0; i < dadosAtletas.length; i++) {
    // Cria uma nova instância de Atleta
    let atletaAtual = new Atleta(
        atletas[i].nome,
        atletas[i].idade,
        atletas[i].peso,
        atletas[i].altura,
        atletas[i].notas
    )
    // Exibe os dados do atleta
    atletaAtual.exibirDados()
}
