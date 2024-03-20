// // // alert ("JavaScript funcionando correctamente")

let variableSinvalor 
console.log('variable sin valor', variableSinvalor);
let booleano1 = false;
let booleano2 = true;
console.log(typeof booleano2);
const PI =3.14;
const TAU = PI * 2; 
console.log('valor de PI dos veces', TAU);
const miNombre =  "Dani";
const miNumeroFav = 25;
let verdadero = false;
console.log("largo mi nombre", miNombre.length);
console.log("tipo", typeof miNumeroFav);
console.log("concatenar", "mi nombre es " + miNombre + "y mi numero favorito es "+ miNumeroFav);

console.log("concatenacion literal", `mi nombre es $[miNombre] y mi numero favortio es $[miNumeroFav]`);

let sere = 'Seré un crack en JavaScript al terminar el bootcamp'
console.log("mayusculas=", sere.toUpperCase());

let hola = 'Hola, soy un crack'

console.log(" 5 primeros caracteres=", hola.substring (0 , 5));

let venticinco = miNumeroFav.toString();
console.log("miNumFav a string=", typeof venticinco);

let flor = "no me olvides"
console.log("concatenacion literal=", `estoy cultivando ${flor} en casa`);
let caracteres = PI.toString();
console.log("hasta los primeros dos decimales=", caracteres.substring (0 ,4))


// -------------------------------ARRAYS------------------------------------

const arrayVacio = []
console.log('arrayVacio=', arrayVacio);
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('arrayNumeros=', arrayNumeros);
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15];
const arrayNumerosPares = [0,2,4,6,8];
const arrayNumerosNeg = [ 0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ["hola", "mundo"]

const loGuardoTodo = ['hola', "que", 23,42.33, 'tal']
const arraDeArrays =  [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

console.log('largo loGuardoTodo=', loGuardoTodo.length);
console.log('agregar', arraDeArrays.push('zanahoria'));
console.log(arraDeArrays);
console.log('mostrarque=', loGuardoTodo[1]);
loGuardoTodo.push('Euralio');
console.log('mostra Euralio=', loGuardoTodo[5]);

// --------------------OBJETOS--------------------------

Coche = {
    marca: "Seat",
    modelo: "leon",
    matricula: "4725 jms",
};
Casa= {
    codPostal: 46009,
    calle: "av portugal",
    portal: 4,
    piso: 2,

}
FullStackDeveloper = {
    lenguajes: ["javascript", "php", "html"],
    proyectos: ["responsive", "Entrega Final", "Mi pag personal"],
}
perro = {
    nombre:'Antonia',
    raza: 'Border Collie',
    color:'Blanco y Negro',
    edad: '10 meses'
};

noticia = {

    titular: 'Titulo noticia',
    cuerpo: ['Parrafo 1', 'parrafo2']
}

console.log('mostrar noticia', noticia);

persona = {
    nombre: 'Alex',
    apellidos: 'Garcia Roig',
    edad: 30,
}
console.log('mostra persona=',persona.nombre);

console.log('mostrar "javascript=',FullStackDeveloper.lenguajes[0]);

portatil= {
    marca: undefined,
}
portatil.marca = 'asus',
console.log('acceder a propiedad con .marca=', portatil.marca);





Concierto = {
    grupos: ["The Strokes", "The Killers", "Trosky Vengaran"],
 }

console.log('valor de la propiedad grupos=', Concierto.grupos);

led = {
    lampara1: "rojo, ",
    lampara2: "verde, ",
    lampara3: "azul",
}
console.log(led);
const arrayRGB = [led.lampara1 + led.lampara2 + led.lampara3]
console.log('formar array con propiedades', arrayRGB);
O_Error = {
    codigo: undefined,
}
const valorcodig = O_Error.codigo;
console.log("mostrando propiedad desde una constante=", valorcodig);

Grupo = {
    integrantes: ['mary', 'dani', 'lola', 'sari']
}
 const integrantes = Grupo.integrantes;
 console.log("hacer variante con array en propiedad de objeto y seleccionar elemento=", integrantes[2]);

impresora = {
    objetotinta: ["rojo", "verde","azul"],
};

const nivelesTinta = impresora.objetotinta

console.log("establecer variable con propiedad=", nivelesTinta);

movil = {
    color: 'azul',
    especificaciones: 'bonito'

};
const especificaciones = movil.especificaciones
// movil.especificaciones = 'nuevo';
console.log("mostar valor de propiedad desde varable=", especificaciones);


console.log('acceder y cambiar propiedad =', portatil.marca = 'MSI');


 console.log(Concierto.grupos.push("Guns N' Roses"));
 console.log("agregar grupo a grupos", Concierto.grupos[3]);
 
 Concierto.fecha =  "20/03/24"
 console.log("crear nueva propiedad=",Concierto);

Concierto.fecha = new Date;
console.log('New Date=', Concierto.fecha);

integrantes.shift(1);
console.log(integrantes);

console.log("mostrando cantidad de array", Object.keys(integrantes));