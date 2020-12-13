import  {Common, VISIBLE_SCREEN} from './Common.esm.js';
import {loader, DATALOADED_EVENT_NAME} from './Loader.esm.js'
import {gameLevels} from './gameLevels.esm.js'
import { canvas } from './Canvas.esm.js';


class Game extends Common{
    constructor(){
        super();
    }

    #canvas = canvas;
    #gameLevels = gameLevels;

    playLevel(level){
        window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel)
        const levelIfno = this.#gameLevels[level - 1];
        this.changeVisibilityOfScreen(this.#canvas.element, VISIBLE_SCREEN)
        this.animate();
    }

    animate(){
        this.#canvas.drawGameOnCanvas();
        this.animationFrame = window.requestAnimationFrame(()=> this.animate());
    }
}

export const game = new Game();