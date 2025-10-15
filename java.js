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

function esPrimo(num) {}

