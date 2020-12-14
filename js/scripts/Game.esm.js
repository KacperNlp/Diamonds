import  {Common, VISIBLE_SCREEN} from './Common.esm.js';
import {loader, DATALOADED_EVENT_NAME} from './Loader.esm.js'
//import {gameLevels} from './gameLevels.esm.js'
import { canvas } from './Canvas.esm.js';
import {Diamond} from './Diamond.esm.js'
import {media} from './Media.esm.js';


const gameState ={
    pointsToWin : 7000,
    getUserPoints: ()=> 500,
    getLeftMovement: ()=> 30,
}

export const GAME_BOARD_X_OFFSET = 40;
export const GAME_BOARD_Y_OFFSET = -5;


class Game extends Common{
    constructor(){
        super();
    }

    #canvas = canvas;
    //#gameLevels = gameLevels;
    #media = media;

    playLevel(level){
        window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel);
        //const levelIfno = this.#gameLevels[level - 1];
        this.changeVisibilityOfScreen(this.#canvas.element, VISIBLE_SCREEN);
        this.diamond = new Diamond(50, 50, 1, 1, 2, this.#media.diamondSprite);
        console.log(this.diamond)
        this.animate();
    }

    animate(){
        this.#canvas.drawGameOnCanvas(gameState);
        this.diamond.draw();
        this.animationFrame = window.requestAnimationFrame(()=> this.animate());
    }
}

export const game = new Game();