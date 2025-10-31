// Classe Atleta
export class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // [ MÉTODOS ]

    // Método para calcular a categoria do atleta com base na idade
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    // Método para calcular o IMC do atleta
    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }

    // Método para calcular a média válida das notas do atleta
    calculaMediaValida() {
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        let notasValidas = notasOrdenadas.slice(1, -1);
        let soma = 0;
        for (let nota of notasValidas) {
            soma += nota;
        }
        let media = soma / notasValidas.length;
        media = media.toFixed(2);
    }


    obtemNomeAtleta() {return this.nome;} // Getter para o nome do atleta
    obtemIdadeAtleta() {return this.idade;} // Getter para a idade do atleta
    obtemPesoAtleta() {return this.peso;} // Getter para o peso do atleta
    obtemAlturaAtleta() {return this.altura;} // Getter para a altura do atleta
    obtemNotasAtleta() {return this.notas;} // Getter para as notas do atleta
    obtemCategoria() {return this.calculaCategoria();} // Getter para a categoria do atleta
    obtemIMC() {return this.calculaIMC();} // Getter para o IMC do atleta
    obtemMediaValida() {return this.calculaMediaValida();} // Getter para a média válida do atleta

    // Método para exibir os dados do atleta
    exibirDados() {
        console.log(`
            Nome: ${this.obtemNomeAtleta()}
            Idade: ${this.obtemIdadeAtleta()}
            Peso: ${this.obtemPesoAtleta()} kg
            Altura: ${this.obtemAlturaAtleta()} m
            Notas: ${this.obtemNotasAtleta().join(", ")}
            Categoria: ${this.obtemCategoria()}
            IMC: ${this.obtemIMC()}
            Média Válida: ${this.obtemMediaValida()}
            `);
    }
}