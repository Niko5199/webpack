import { getPokemon } from '../generics/get-pokemon';
import { genericFunction } from '../generics/generics';

const name: string = 'Pikachu';

genericFunction(name);

// console.log(getPokemon());

getPokemon(1)
  .then(resp => console.log(resp))
  .catch(err => console.log(err))
  .finally(() => console.log('Finalizado'));

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');

type Point = {
  x: number;
  y: number;
};

type Pon = keyof Point;

/*
 * Para entender las funciones genericas en typescript,
 * Recuerda que a las funciones genericas desconocen el tipo
 * de valor que les estamos pasando entonces por eso usamos uno
 * que puede ser generalizado por eso usamos <T>, este es solo
 * el tipo, no es un valor o una variable. Solo es el tipo de
 * valor que extremos del parametro al que hacemos referencia.
 */

function sayHi<Type, Key extends keyof Type>(obj: Type, arg: Key) {
  console.log(obj[arg]);
}

sayHi({ name: 'Josue', age: 22 }, 'age');

type User = {
  name: string;
  age: number;
  location: string;
};

const users: User[] = [
  {
    name: 'Josue',
    age: 22,
    location: 'Mexico',
  },
  {
    name: 'Juan',
    age: 32,
    location: 'Panama',
  },
];

function getUsersLocation<Type, Key extends keyof Type>(
  arrgObj: Type[],
  key: Key
): Type[Key][] {
  return arrgObj.map(obj => obj[key]);
}

getUsersLocation(users, 'location');
