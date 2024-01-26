import { Game,Elementos, State } from "./constans";
import globals from "./globals.js";
import Icon from "./Icon.js";
import {mapa1 } from "./Mapa.js";
import gameRender from "./gameRender.js";


//Funcion que inicializa los elementos HTML
function initHTMLelements()
{
    //Canvas, context Screen
    globals.canvas = document.getElementById('gameScreen');
    globals.ctx = globals.canvas.getContext('2d');

    //Eliminacion del Anti-Aliasing
    globals.ctx.imageSmoothingEnabled = false;

    //Caja de texto para pruebas
    globals.txtPruebas = document.getElementById('txtPruebas');

}
//Funcion que inicializa las variables del juego
function initVars()
{
    //Inicializamos el estado del juego
    globals.gameState = Game.PLAYING;

     //Inicializamos los estados de las acciones
     globals.action = {
        moveLeft: false,
        moveRight: false,
        moveUp: false,
        moveDown: false,
       }

     //Variables logica juego
     globals.life = 300;
}
function loadAssets()
{
    let tileSet;

    //Load the tileset image
    tileSet = new Image();
    tileSet.addEventListener("load", loadHandler, false);
    //tileSet.src = "./images/spritesheet1.png"; //Ojo que la ruta es relativa al HTML, no al JS
    globals.tileSets.push(tileSet);
    globals.IconToLoad.push(tileSet);

    //Load de elements
    tileSet = new Image();
    tileSet.addEventListener("load", loadHandler, false);
    //tileSet.src = "./images/bricks.png"; //Ojo que la ruta es relativa al HTML, no al JS
    globals.tileSets.push(tileSet);
    globals.IconToLoad.push(tileSet);
}
//Funcion que se llama cada vez que se carga un activo
function loadHandler()
{
    globals.IconLoaded++;

    //Una vez se han cargado todos los activos pasamos
    if(globals.IconLoaded === globals.IconToLoad.length)
    {
        //Remove the load event listener
        for (let i = 0; i < globals.tileSets.length; ++i)
        {
            globals.tileSets[i].removeEventListener("load", loadHandler, false);
        }
      
        console.log("Elements finished loading");

        //Start the game 
        globals.gameState = Game.PLAYING;
        console.log("entra1");
    }
}
function initMapa()
{
    globals.mapa = drawMap().mapa1;
}
export {
    initHTMLelements,
    initVars,
    loadAssets,
    initElementos,
    initMapa
}
function initElementos()
{
    initPersonaje();
    initAraña();
    initDinero();
    initVidas();
}

function initPersonaje()
{
    // Cadena Unicode
const unicodeString = '\u{1F474}'; // Ejemplo: hombre con turbante

// Obtener el código del primer carácter en la cadena
const Icono = unicodeString.codePointAt(0);
    const personaje = new Icon(Elementos.PERSONAJE,State.LEFT,7,8,unicodeString);
    globals.icons.push(personaje);
    
}
function initAraña()
{
    // Cadena Unicode
const unicodeString = '\u{1F577}'; // Ejemplo: hombre con turbante

// Obtener el código del primer carácter en la cadena
const Icono = unicodeString.codePointAt(0);
    const araña = new Icon(Elementos.ARAÑA,State.LEFT,7,8,unicodeString);
    globals.icons.push(araña);
    
}
function initDinero()
{
    // Cadena Unicode
const unicodeString = '\u{1F4B5}'; // Ejemplo: hombre con turbante

// Obtener el código del primer carácter en la cadena
const Icono = unicodeString.codePointAt(0);
    const dinero = new Icon(Elementos.DINERO,State.LEFT,7,8,unicodeString);
    globals.icons.push(dinero);
    
}
function initVidas()
{
    // Cadena Unicode
const unicodeString = '\u{1F49A}'; // Ejemplo: hombre con turbante

// Obtener el código del primer carácter en la cadena
const Icono = unicodeString.codePointAt(0);
    const vidas = new Icon(Elementos.VIDAS,State.LEFT,7,8,unicodeString);
    globals.icons.push(vidas);
    
}


