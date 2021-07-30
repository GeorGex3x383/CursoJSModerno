// Función anónima autoinvocada - Patrón Módulo
const miModulo = (() => {
    'use strict' // Herramienta muy útil para el patrón módulo

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

// Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

    const puntosHTML = document.querySelectorAll('small'),
    divCartasJugadores = document.querySelectorAll('.divCartas')

    //Esta función inicializa el juego
    const inicializarJuego = (numJugadores = 2) =>{
        console.clear();
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
            puntosHTML[i].innerText = 0;
            divCartasJugadores[i].innerHTML = '';
        }
        //puntosHTML.forEach(elem => elem.innerText = 0);
        //divCartasJugadores.forEach(elem => elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

// Esta función crea una nueva baraja
    const crearDeck = () =>{

        deck = [];
        for (let i = 2; i <= 10; i++) {
            for(let tipo of tipos){
                deck.push(i + tipo);
            }
        }

        for(let tipo of tipos){
            for(let especial of especiales){
                deck.push(especial + tipo);
            }
        }
        return _.shuffle(deck);
    }

    // Esta función me permite tomar una carta
    const pedirCarta = () =>{
        if(deck.length === 0){
        throw 'No hay cartas en el deck'
        }
        return deck.pop();
    }
    // const pedirCarta = () => (deck.length === 0) ? 'No hay cartas en el deck' : deck.pop();

    // Esta función nos dara el valor de la carta
    const valorCarta = (carta) =>{
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) 
        ? (valor === 'A') ? 11 : 10
        : valor * 1;
    }

    const acumularPuntos = (carta, turno) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) =>{
        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () =>{
        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if(puntosComputadora === puntosMinimos){
                alert('Empate! Nadie Gana! :(');
            } else if(puntosMinimos > 21){
                alert('La computadora gana!');
            } else if(puntosComputadora > 21){
                alert('El jugador gana!!!! :)');
            } else {
                alert('La computadora gana!');
            }
        }, 100);
    }

    // Lógica de la Computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
    }

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta,0);

        if(puntosJugador > 21){
            console.error('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if(puntosJugador === 21){
            console.warn('21! Genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () =>{
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    // btnNuevo.addEventListener('click', () =>{
    //     inicializarJuego();
    // });

    return {
        nuevoJuego: inicializarJuego
    };

})();


