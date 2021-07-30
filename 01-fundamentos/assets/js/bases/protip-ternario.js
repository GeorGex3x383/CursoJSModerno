const elMayor = (a, b) => (a>b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 DOLARES' : '10 DOLARES';

console.log(elMayor(20,15));
console.log(tieneMembresia(true));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Strange',
    amigo ? 'Thor' : 'Loki',
];

console.log(amigosArr);

const nota = 65;
const grado = (nota >= 95) ? 'A+' :
            (nota >= 90) ? 'A' :
            (nota >= 85) ? 'B+' :
            (nota >= 80) ? 'B' :
            (nota >= 75) ? 'C+' :
            (nota >= 70) ? 'C' :
            (nota >= 65) ? 'D+' :
            (nota >= 60) ? 'D' : 'F';

console.log({nota, grado});