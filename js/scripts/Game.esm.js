import  {Common} from './Common.esm.js';
import {loader, DATALOADED_EVENT_NAME} from './Loader.esm.js'
import {gameLevels} from './gameLevels.esm.js'


class Game extends Common{
    constructor(){
        super();
    }

    #gameLevels = gameLevels;

    playLevel(level){
        window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel)
        const levelIfno = this.#gameLevels[level - 1];
        this.animate();
    }

    animate(){
        this.animationFrame = window.requestAnimationFrame(()=> this.animate());
        console.log("let's play")
    }
}

export const game = new Game();