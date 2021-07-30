function crearPersona(nombre, apellido){
    return{
        nombre,
        apellido,
    }
}

const persona = crearPersona('Pepe', 'Rodriguez');
console.log(persona);

const argumentos = (...args) => {
    console.log(args);
}

argumentos(10, 'Jorge', true, false, 'Hola');

const argumentos2 = (...args) => {
    return args;
}

const [vivo, casado, nombre, edad] = argumentos2(true, false, 'Jorge', 22);
console.log({vivo, casado, nombre, edad});