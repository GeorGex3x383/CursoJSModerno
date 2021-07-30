let personaje = {
    nombre: 'Tont Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: 56.902
    },
    trajes: ['Mark1', 'Mark5', 'Hulkbuster'],
    direccion: {
        zip: '1089, 9890',
        ubicacion: 'Malibu, California',
    },
    ultimaPelicula: 'Infinity War'
};

console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('Coords: ', personaje.coords);
console.log('Coords: ', personaje.coords.lat);

console.log('No. Trajes: ', personaje.trajes.length);
console.log('Ultimo Traje: ', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

// Más detalles

delete personaje.edad;

console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});