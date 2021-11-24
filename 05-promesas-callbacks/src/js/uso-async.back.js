import './styles.css';

import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

buscarHeroe('capi2').then(heroe => console.log(heroe)).catch(console.warn);
buscarHeroeAsync('iron2').then(heroe => console.log(heroe)).catch(console.warn);
