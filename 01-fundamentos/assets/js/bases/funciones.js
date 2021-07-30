function Saludar(nombre){
    console.log('Hola ' + nombre);
}

const saludar2 = function(){
    console.log('Hola Mundo');
}

const saludarFlecha = () => {
    console.log('Hola Mundo');
}

Saludar('Jorge');
saludar2();
saludarFlecha();

function sumar(a,b){
    return a +b;
}

const sumar2 = (a,b) =>{
    return a+b;
}

const sumar3 = (a,b) => a+b;

console.log(sumar(1, 2));
console.log(sumar2(2, 2));
console.log(sumar3(3, 3));

function numAleatorio(){
    return Math.random();
}

const getAleatorio = () => Math.random();

console.log(numAleatorio());
console.log(getAleatorio());