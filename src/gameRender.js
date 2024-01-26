import { mapa1 } from "./Mapa.js";
import globals from "./globals.js";
//Funcion que renderiza los graficos
export default function render() {
    //Change what the game is doing based on the game state
    switch (globals.gameState) {
        case Game.LOADING:
            //Draw loading spinner
            break;
        
        case Game.PLAYING:
            drawGame();

            break;

            default:
                console.error("Error: Game State invalid");
        }
    }

    function renderIcon(icon)
    {
        const fila = icon.fila;
        const columna = icon.columna;
    
        //Dibujamos el icon
        globals.ctx.drawImage(globals.tileSets,fila,columna);
    }

    function drawIcons()
    {
        for (let i = 0; i < globals.icons.length; ++i)
        {
            const icon = globals.icons[i];
            renderIcon(icon);
        }
    }

function drawGame()
{
    drawIcons();
    drawMap();
    renderScore();
}

  // Tamaño de cada celda en el mapa
  var cellSize = 40;

  // Dibujar el mapa
  function drawMap() {
      for (let i = 0; i < mapa1.length; i++) {
          for (let j = 0; j < mapa1[i].length; j++) {
              var x = j * cellSize;
              var y = i * cellSize;

              // Dibujar paredes (si el valor es 1)
              if (mapa1[i][j] === 1) {
                  ctx.fillStyle = '\u2B1C'; 
                  ctx.fillRect(x, y, cellSize, cellSize);
                  console.log("entra");
              }
          }
      }
  }

  renderScore()
  {
     globals.ctxHUD.font = '8px "emulogic"';
     globals.ctxHUD.fillStyle = 'yellow';
     globals.ctxHUD.fillText("SCORE", 3, 9);
     globals.ctxHUD.fillStyle = 'lightgray';
     globals.ctxHUD.fillText(" " + score, 54, 9);
  }