/*let string1 = "Hola mundo"
let string2 = "somos"
let string3 = `${string1} locos de remate:)`
let string4 = string1 + string2

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

let frase = "javaScript es un lenguaje de programacion"
console.log(frase.length)
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())
console.log(frase.substring(0, 10))*/

/*const entero = 42
//const decimal = 3.14
console.log(typeof entero, typeof decimal)

console.log(decimal)

const cientifico = 5e3

const infinito = infinity 
const noesnumero  = NaN

const suma = 3
const resta = 3.14
const multiplicacion =  3 * 4
//const division = 15 % 8


const modulo = 15 % 8
//onst exponenciasion 

const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)

const string = "42"


const binary = "1010"
const decimal = parseInt(binary, 2)


const suma = "5" + 3 
console.log(suma)
console.log(typeof suma)*/

/*const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)
console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)*/


/*const NumEval = 57;
let NumFinal = [];

for (let i = NumEval; i >= 30; i--) {
    if (i % 5 === 0) {
        NumFinal.push(i);
        console.log(i);
    }   
}
*/



/*function encontrarMayor(a, b, c) {
    
    const variable1 = a;
    const variable2 = b;
    const variable3 = c;
    
    let mayor = variable1;

    
    if (variable2 > mayor) {
        mayor = variable2;
    }

    
    if (variable3 > mayor) {
        mayor = variable3;
    }

    console.log(`Valores: ${variable1}, ${variable2}, ${variable3}`);
    console.log(`La variable mayor es: ${mayor}`);
}

encontrarMayor(75, 50, 20);*/


/*function sumarParesEImparesInteractiva() {
  
    const entrada = prompt("Introduce el número máximo para el rango (ej: 20):");
    
    
    const limiteSuperior = parseInt(entrada);

   
    if (isNaN(limiteSuperior) || limiteSuperior <= 0) {
        console.log("Por favor, introduce un número entero positivo válido.");
        return; 

    }
    let sumaPares = 0;
    let sumaImpares = 0;
    
    
    for (let i = 1; i <= limiteSuperior; i++) {
        
        if (i % 2 === 0) {
            
            sumaPares += i; 
        } else {
            
            sumaImpares += i; 
        }
    }

    
    console.log(`--- Resultados de Suma (Rango 1 a ${limiteSuperior}) ---`);
    console.log(`La suma de todos los números PARES es: ${sumaPares}`);
    console.log(`La suma de todos los números IMPARES es: ${sumaImpares}`);
    
    
    console.log(`\nLos resultados se almacenaron en las variables 'sumaPares' y 'sumaImpares' dentro de la función.`);
}


sumarParesEImparesInteractiva();*/
/*function determinarEtapaDeVida(edad) {
    let etapa = "";
    let subsidio = "";

    
    if (typeof edad !== 'number' || edad < 0 || isNaN(edad) || !Number.isInteger(edad)) {
        return { 
            etapa: "Edad Inválida. Por favor, ingrese un número entero positivo.",
            subsidio: "No aplica." 
        };
    }
    
    
    if (edad <= 12) {
        etapa = "**Infancia / Niñez**";
        subsidio = "**¡APLICA PARA SUBSIDIO!**"; 
    } 
    else if (edad <= 19) {
        etapa = "Adolescencia";
    } 
    else if (edad <= 39) {
        etapa = "Adultez Joven";
    } 
    else if (edad <= 59) {
        etapa = "Adultez Media";
    } 
    else if (edad <= 85) {
        etapa = "Vejez / Tercera Edad";
    } 
    else {
        etapa = "Longevidad"; 
    }

    
    return { etapa: etapa, subsidio: subsidio || "No aplica." };
}


const edadInput = prompt('Ingrese su edad para determinar su etapa de vida y elegibilidad para subsidio:');
const edad = parseInt(edadInput); 

const resultado = determinarEtapaDeVida(edad);


console.log('--- RESULTADO ---');
console.log(`Usted ingresó la edad: ${edad}`);
console.log(`Su etapa de vida es: ${resultado.etapa}`);
console.log(`Estado del Subsidio: ${resultado.subsidio}`);
console.log('-----------------');*/

/*function esPrimo(num) {}

function listarPrimosHasta(limite) {}*/

const fruits = Array("Apple", "Banana", "Orange", "Mango")
console.log(fruits)
console.log(fruits.length)

const wilder = Array(12)
console.log(wilder)

const numbers = Array(1,2,3,4,5)
console.log(numbers)

const unenumero = [6,'tres']
console.log(unenumero)

const recipeingredientes = [
    'flour',
    true,
    2,
    {
        ingredientes: 'leche', cantidad: '1 litro'
    },
    false
]
console.log(recipeingredientes)

fruits.push('Pineapple')
console.log(fruits)
//push(elemento) agrega un elemento al final del array

const newfruits = fruits.concat(['Grapes', 'Strawberry'])
console.log(newfruits)
//concat(elemento1, elemento2) agrega uno o mas elementos al final del array y crea un nuevo array
    
console.log(Array.isArray(fruits))

const numbersArray=[1,2,3,4,5]
let sum = 0;
for (const number of numbersArray) {
    sum += number;
}

console.log(sum)

const number=[2,1,5,4,3]

//console.log(number.pop())
//console.log(number.sort())

//function compareNumbers(a, b) {
  //  return a - b;
//}
//number.sort(compareNumbers)
//console.log(number)
//const ml = number.find((num) => num > 2)
//console.log(number)

/*const mt = (eleme) => eleme > 4
console.log(number.findIndex(mt))

const carrito =[
    {producto: 'Libro', precio: 300},
    {producto: 'Camisa', precio: 1500},
    {producto: 'Guitarra', precio: 5000},
    {producto: 'Disco', precio: 700},   
]
const resultado = carrito.reduce( (accomulator, elemento) => accomulator + elemento.precio, 0)
console.log(resultado)
console.log(carrito)

const frutas = ['Banana', 'Apple', 'Banana', 'Mango', 'Pineapple','Apple','Banana']
const frutaUnica = frutas.reduce((acumulador, elemento) => {
    if (acumulador[elemento]) {
        acumulador[elemento] ++
    } else {
        acumulador[elemento] = 1
    }
    return acumulador
}, {})
console.log(frutaUnica)*/

class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    // Método que devuelve y concatena una cadena de información
    informacion() {
        return `El libro ${this.titulo} de ${this.autor} tiene ${this.paginas} páginas.`;
    }
}

// Creación de objetos usando el constructor
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 417);
const libro2 = new Libro("1984", "George Orwell", 328);

// mostramos la información de los libros
console.log(libro1)
console.log(libro2)

class animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido() {
        console.log("El animal emite un sonido")
    }
}

class perro extends animal {
    constructor(nombre, edad , raza ) {
        super(nombre, edad)
        this.raza = raza 
    }
    emitirSonido() {
        console.log("El perro ladra: ¡Guau Guau!")
    }
    correr() {
        console.log(`${this.nombre} está corriendo`)
    }
    

}

const Perro1 = new perro("Rex", 5,"Labrador")
console.log(Perro1)
Perro1.emitirSonido()
Perro1.correr()

const usersDatabase = [
    { username: "wilder",
     password: "123" 
    },

    { username: "vanessa",
    password: "234" 
    },
    { username: "herney", password: "321" }
];

const usersTimeLine = [
    { username: "wilder", 
    timeline: "Publicación de wilder"
    },
    { username: "vanessa", 
    timeline: "Publicación de vanessa" 
    },
    { username: "herney", 
    timeline: "Publicación de herney" 
    }
]
const username = prompt("Ingrese su nombre de usuario:");
const password = prompt("Ingrese su contraseña:");

    
function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert("Uuups, usuario o contraseÃ±a incorrectos!");
  }
}

signIn(username, password);