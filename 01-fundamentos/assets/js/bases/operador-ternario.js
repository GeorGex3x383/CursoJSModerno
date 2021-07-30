const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje;

// if(dia === 0 || dia === 6){
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de la semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta Abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las: ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las: ${horaApertura}`;

console.log({horaApertura, mensaje});