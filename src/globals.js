import {Game} from "./constans.js";

export default {
    //Acceso al canvas y context
    canvas: {},
    ctx: {},

    //Estado del juego
    gameState: Game.INVALID,

    //Datos de imagen
    tileSets: {},

    //Iconos
    IconToLoad: [],
    IconLoaded: 0,

    //Datos de los iconos
    icons: [],
    mapa: []
}