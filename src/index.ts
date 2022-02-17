import { Pokemon } from './decorators/pokemon';
import { Type } from './interfaces/pokemon';

const charmander = new Pokemon('Charmander');
console.log(charmander);

// (Pokemon.prototype as any).customName = 'Pikachu';

// charmander.savePokemonDB(-1);

// charmander.publicApi = 'HHola';
