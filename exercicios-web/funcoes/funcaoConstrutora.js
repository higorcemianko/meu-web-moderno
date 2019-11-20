function Pessoa(nome){
    this.nome = nome
    this.falar = function(){
            return `Meu nome é ${this.nome}`;
        }
}

let pessoa = new Pessoa('Higor')
console.log(pessoa.falar())