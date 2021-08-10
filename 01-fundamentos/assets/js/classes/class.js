class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias;'
    }

    static mensaje(){
        console.log('Hola, soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy: ${this.nombre} y mi identidad es: ${this.codigo}`);
    }

    miFrase(){
        console.log(`Siempre digo: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Se responsable');
spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'Chilaquiles';
console.log(spiderman.getComidaFavorita);
console.log(spiderman);

// Persona._conteo = 2;
console.log('Conte estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();