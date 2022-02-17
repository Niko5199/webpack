/*

 * Imports y Exports
 *
 *
 * Cuando hacemos una importacion y usamos los corchetes para
 * importar una propiedad o una funcion, esta se llama
 * destructuracion
 *
 * Podemos acceder a las propiedades o funciones de una
 * importacion una coma y despues el nombre de la propiedad
 */

// import Hero from './classes/hero';
// import { powers } from './data/powers';

// console.log('Hola Mundo!');

// const superman = new Hero('Superman', 1, 30);

// console.log(superman);
// console.log(superman.power);

/*
 * 83. Introduccion a Generics
 * Que es una funcion generica ?
 *
 * Basicamente es una funcion que puede recibir cualquier tipo de
 * argumento, cuando tengamos el problema de que usamos un
 * metodo que no le corresponde a un valor ejemplo usamos toFixed
 * para un numero, pero cuando lo usamos con un string, no nos
 * arroja un error es un problema ya que typescript no nos avisa
 * de esto, es aqui donde entran las generics
 *
 * Yo puedo especificar a typescript y decirle que la funcion que
 * trabajamos puede recibir cualquier tipo de objetos pero la
 * salida va a ser exactamente igual al mismo tipo de objeto
 * de entrada o no necesariamente el mismo objeto de entrada.
 *
 * Si mando un string, me va a devolver un string, y puedo acceder
 * a sus metodos y propiedades
 *
 * 84. Funciones Genericas
 *
 * Como vemos en el problema de la clase 83, cuando usamos un metodo
 * a un valor de retorno que no le corresponde, typescript no nos
 * avisa de esto, para hacer una funcion generica, usamos los
 * <> y adentro de colocar el tipo de dato que deseamos, en este
 * caso el T es el que se utiliza para definir que es de tipo
 * generico, hace referencia al valor que estamos pasando como
 * parametro,pero puede ser cualquier letra nosotros podemos tener
 * T,G,Z. Cualquier cantidad de tipos genericos, Incluso puede ser
 * un nombre, con este tipo de dato establecemos el tipo de dato
 * del parametro o argumento que este en nuestra funcion E/P:
 *
 * const nombreFunction = <T>(argument: T):T
 *
 * Con solo hacer esto ya tendremos una funcion generica, cuyo
 * argumento es exactamente el mismo tipo de dato que le estamos
 * mandando, y el retorno es el mismo tipo de dato que le estamos
 *
 *
 * 85 Ejemplo de funcion generica en accion
 *
 * En las clases anteriores, lo que hemos estado haciendo nosotros
 * es que a la hora de trabajar con un argumento, el argumento es
 * quien logra determinar el tipo, gracias a que es una funcion
 * generica, es decir decir estamos mandando como argumento un
 * tipo de dato number,por consecuencia logra determinar que el
 * valor que esta encapsulado en <T> es de tipo number, esto ayuda
 * a typescript a saber el tipo de dato con el cual estamos trabajando
 *
 *
 * 86 Agrupar Exportaciones
 *
 * Puede que nosotros tengamos una aplicacion donde tenga muchas
 * interfaces, pero todo empieza agrupando nuestras interfaces
 *
 * Esta tecnica nos ayudara a reducir considerablemente el tamaño
 * de nuestro codigo, ya que podemos agrupar todas nuestras interfaces
 * exportadas en un solo archivo, y asi reducir el tamaño de nuestro
 * codigo
 *
 */
import { printObject, genericFunction } from '../generics/generics';
// import { Hero } from './interfaces/hero';

import { Hero, Villian } from '../interfaces/index';

// * Clase 83
// printObject('Hola');
// printObject(1);
// printObject(true);

//  * clase 84
// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction('Hola').charAt(3));

// * Clase 85
const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
};

console.log(genericFunction<Hero>(deadpool).realName);
