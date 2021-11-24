import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

// buscarHeroe(heroeId1).then(heroe1 => {
//     //console.log(`Enviando a ${heroe.nombre}`);
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
//     });
// });

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
}).catch(err => {
    alert(err);
}).finally(() => {
    console.log('Finally');
});

// buscarHeroe(heroeId1, (err, heroe1) => {
//     if (err) {
//         return console.error(err);
//     }

//     buscarHeroe(heroeId2, (err, heroe2) => {

//         if (err) {
//             return console.error(err);
//         }

//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
//     });

// });
