// Solicitud al usuario de los números de personajes que quiere solicitar al sistema:

var n1 = Number(prompt("Elige del 1 al 591 el primer número de personaje de Rick and Morty que quieres consultar"));
var n2 = Number(prompt("Elige del 1 al 591 el segundo número de personaje de Rick and Morty que quieres consultar"));
var n3 = Number(prompt("Elige del 1 al 591 el tercer número de personaje de Rick and Morty que quieres consultar"));



// Disgregación de las partes de la URL para obtener la información de la API
const HOME_API_URL = "https://rickandmortyapi.com/api/"
const PERSONAJES_URL = "character/:id/"


// Determinación de que la consulta de información se hace a un servidor externo
const CONFIGURACION = {crossDomain: true}

// Función para la impresión de información 
const PERSONAJE = function (personaje){
    document.write(`Hola, mi nombre es ${personaje.name}, mi especie es ${personaje.species} y soy originario del planeta ${personaje.origin.name} ${"<br><br>"}`);
}

// Construcción de la URL completa para la consulta de información del primer personaje solicitado por el usuario
const URL_PRIMER_PERSONAJE = `${API_URL}${PERSONAJES_URL.replace(":id", n1)}`

// Construcción de la URL completa para la consulta de información del segundo personaje solicitado por el usuario
const URL_SEGUNDO_PERSONAJE = `${API_URL}${PERSONAJES_URL.replace(":id", n2)}`

// Construcción de la URL completa para la consulta de información del tercer personaje solicitado por el usuario
const URL_TERCER_PERSONAJE = `${API_URL}${PERSONAJES_URL.replace(":id", n3)}`



$get(URL_PRIMER_PERSONAJE, CONFIGURACION, PERSONAJE);
$get(URL_SEGUNDO_PERSONAJE, CONFIGURACION, PERSONAJE);
$get(URL_TERCER_PERSONAJE, CONFIGURACION, PERSONAJE);
