let atletas = [
    {
        nome: "João Silva",
        notas: [9.5, 8.7, 9.0, 8.5, 9.2]
    },
    {
        nome: "Maria Souza",
        notas: [8.0, 7.5, 8.3, 8.7, 9.0]
    },
    {
        nome: "Carlos Pereira",
        notas: [9.8, 9.6, 9.7, 9.5, 9.9]
    },
    {
        nome: "Ana Lima",
        notas: [7.5, 8.0, 7.8, 8.2, 7.9]
    }
]

function calcularMedia(atletas){
    for(let atleta of atletas){
        // colocando notas em ordem crescente
        let notas = atleta.notas.sort((a, b) => a - b)
        // removendo a menor e a maior nota
        let notasValidas = notas.slice(1,4)
        // calculando a soma das notas válidas
        let soma = 0
        for(let nota of notasValidas){
            soma += nota
        }
        // calculando a média
        let media = soma / notasValidas.length

        // exibindo o resultado
        console.log(`Atleta: ${atleta.nome}`)
        console.log(`Notas Obtidadas: ${notas.join(", ")}`)
        console.log(`Média Válida: ${media.toFixed(2)}`)
        console.log('-------------------------')
    }

    calcularMedia(atletas)

}