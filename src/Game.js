import globals from "./globals.js";
import { initHTMLelements,initVars,initAssets,initElementos, initMapa } from "./initialize.js";
//Game init
window.onload = init;

function init()
{
    initHTMLelements();
    initVars();
    initAssets();
    initElementos();
    initMapa();
}

