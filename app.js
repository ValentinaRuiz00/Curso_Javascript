let nombreUsuario = "Valentina"
console.log(nombreUsuario)

let edad = 21
console.log(edad)

//concatenar
console.log("Mi nombre es: " + nombreUsuario + (" ") + edad)

//prompt
// let numeroUno = parseInt(prompt("Ingrese un número"));
// let numeroDos = parseInt (prompt("Ingrese un número"));

//muestra el tipo de dato de la variable,parseint para cambiar de string a int
// console.log(typeof numeroUno)

// let resultado = numeroUno + numeroDos
// console.log(resultado);

// //If 
// let numUsuario = parseInt(prompt("Ingrese un número de 1 al 10"));

// if(numUsuario<=10){
//     console.log("Correcto")
// }
// else{
//     console.log("El número debe ser menor o igual a 10");
// }

//switch
let opcionUser = prompt(`
    Elija una opción:
    1: Libros
    2: Películas
    3: Juegos
    `);
    
    switch (opcionUser) {
        case "1":
            console.log("Principito");
            break;
        case "2":
            console.log("Matrix");
            break;
        case "3":
            console.log("NFS");
            break;
        default:
            console.log("Opción no válida");
            break;
    }

//while
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1) {
    if (numeroMaquina < numeroUser) {
        console.log("Es más bajo");
    } else {
        console.log("Es más alto");
    }

    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
}

if (numeroMaquina === numeroUser) {
    console.log("GANASTE");
} else {
    console.log("PERDISTE, el número era: " + numeroMaquina);
}

//Array
let frutas1 = ["manzana", "platano", "pera"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
undefined

//For
let frutas2 = ["manzana", "platano", "pera"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//for of
for (let fruta of frutas) {
    console.log(fruta);
}

//funciones
function sumar(n1, n2) {
    return n1 + n2;
}

let resultadoUno = sumar(10, 20);
let resultadoDos = sumar(50, 60);
let resultadoTres = sumar(100, 30);

console.log("El total uno es: " + resultadoUno);
console.log("El total dos es: " + resultadoDos);
console.log("El total tres es: " + resultadoTres);

