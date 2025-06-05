
class Animal {
    constructor(nome, idade) {
        if (new.target === Animal) {
            throw new Error("Animal é uma classe abstrata e não pode ser instanciada diretamente.");
        }
        this.nome = nome;
        this.idade = idade;
    }

   
    fazerSom() {
        throw new Error("Método 'fazerSom()' deve ser implementado");
    }

    movimentar() {
        throw new Error("Método 'movimentar()' deve ser implementado");
    }

   
    descrever() {
        return `${this.nome} tem ${this.idade} anos`;
    }
}


class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    fazerSom() {
        return "Au au";
    }

    movimentar() {
        return `${this.nome} está correndo`;
    }

    descrever() {
        return `${super.descrever()} e é um ${this.raca}`;
    }
}


class Passaro extends Animal {
    constructor(nome, idade, especie, envergaduraAsa) {
        super(nome, idade);
        this.especie = especie;
        this.envergaduraAsa = envergaduraAsa;
    }

    fazerSom() {
        return "Piu piu";
    }

    movimentar() {
        return `${this.nome} está voando`;
    }

    descrever() {
        return `${super.descrever()}, é um ${this.especie} com envergadura de ${this.envergaduraAsa}cm`;
    }
}


const rex = new Cachorro("Rex", 5, "Labrador");
const pipoca = new Passaro("Pipoca", 2, "Canário", 15);
const luna = new Cachorro("Luna", 3, "Poodle");


console.log(rex.descrever());
console.log("Som:", rex.fazerSom());
console.log("Movimento:", rex.movimentar());

console.log("\n" + pipoca.descrever());
console.log("Som:", pipoca.fazerSom());
console.log("Movimento:", pipoca.movimentar());

console.log("\n" + luna.descrever());
console.log("Som:", luna.fazerSom());
console.log("Movimento:", luna.movimentar());


try {
    const animalGenerico = new Animal("Genérico", 1);
} catch (error) {
    console.log("\nErro ao instanciar Animal:", error.message);
}