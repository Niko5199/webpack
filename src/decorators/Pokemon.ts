function printToConsole(constructor: Function) {
  // console.log(constructor);
}

const printToConsoleConditional = (val: boolean): Function => {
  if (val) return printToConsole;
  else return () => {};
};

// * Funcion para bloquear prototipo de una clase
// * para esto usamos el metodo seal esto previene el crecimiento
// * de un objeto

const bloquearPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  // console.log(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    /*
     * propertyKey apunta al nombre que esta decorando en este caso el metodo que lo
     * esta invocando
     * descriptor es un objeto que nos permite ponerlo en modo de escritura o lectura
     * target contiene el constructor de la clase que esta invocando el decorador
     *
     */
    // descriptor.value = () => console.log('Hola mundo');
    const originalMathod = descriptor.value;
    descriptor.value = function (id: number) {
      if (id < 0 || id > 800) {
        return console.error(' El id debe estar entre 0 y 800');
      } else originalMathod(id);
    };
  };
}

function readOnly(isWriteable: boolean = true): Function {
  return function (target: Object, propertyKey: string) {
    // console.log(target, propertyKey, 'HOLA');
    const descriptor: PropertyDescriptor = {
      get() {
        return 'Josue';
      },
      set(val) {
        // console.log(this, val, 'HOLA2');
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWriteable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}

@bloquearPrototype
@printToConsoleConditional(true)
export class Pokemon {
  @readOnly()
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonDB(id: number) {
    console.log(`Pokemon guardado a la base de datos con id: ${id}`);
  }
}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
