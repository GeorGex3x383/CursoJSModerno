const Jorge = {
    nombre: 'Jorge',
    edad: 22,
    imprimir(){
        console.log(`Npmbre: ${this.nombre} - edad: ${this.edad}`);
    }
}

Jorge.imprimir();

function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir =  function(){
        console.log(`Npmbre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18);
console.log(maria);
maria.imprimir();