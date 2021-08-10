class Rectangulo{
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    imprimir(){
        console.log('Mira nomas');
        this.#duplicarArea();
    }

    #duplicarArea(){
        console.log(this.#area * 2);
    }

}

const rectangulo =  new Rectangulo(10, 15);

console.log(rectangulo);
rectangulo.imprimir();