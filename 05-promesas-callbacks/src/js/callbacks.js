const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Mucho dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Araña'
    },
}

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    if (heroe) {
        callback(null, heroe);
    } else {
        callback(`No existe un heroe con el id: ${id}`);
    }

    callback(heroe);
}