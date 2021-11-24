import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';
import './styles.css';

console.time('await');

obtenerHeroeAwait('iron2').then(heroe => {
    console.log(heroe);
    console.timeEnd('await');
}).catch(console.warn);
