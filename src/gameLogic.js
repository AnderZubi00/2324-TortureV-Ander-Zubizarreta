import globals from "./globals.js";
import {Game} from "./constans.js";

export default function update()
{
    //Change what the game is going based on the game state
    switch(globals.gameState)
    {
       case Game.LOADING:
          console.log("Loading assets...");
          break;
        
        case Game.PLAYING:
           playGame();
           break;

           default:
            console.error("Error: Game State invalid");
            
       
    }
}

function playGame()
{
   
}