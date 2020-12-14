import  {Common, VISIBLE_SCREEN} from './Common.esm.js';
import {loader, DATALOADED_EVENT_NAME} from './Loader.esm.js'
import {gameLevels} from './gameLevels.esm.js'
import { canvas } from './Canvas.esm.js';
import {Diamond} from './Diamond.esm.js'
import {media} from './Media.esm.js';
import {GameState} from './GameState.esm.js'


const gameSettings ={
    pointsToWin : 7000,
    getUserPoints: ()=> 500,
    getLeftMovement: ()=> 30,
}

export const GAME_BOARD_X_OFFSET = 40;
export const GAME_BOARD_Y_OFFSET = 20;


class Game extends Common{
    constructor(){
        super();
    }

    #canvas = canvas;
    #media = media;

    playLevel(level){
        const {numberOfMovement, pointToWin, board : diamonds, } = gameLevels[level - 1];

        window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel);

        this.gameState = new GameState(level, numberOfMovement, pointToWin, diamonds, this.#media.diamondSprite)

        this.changeVisibilityOfScreen(this.#canvas.element, VISIBLE_SCREEN);
        this.animate();
    }

    animate(){
        this.#canvas.drawGameOnCanvas(gameSettings);
        this.gameState.getGameBoard().forEach(diamond => diamond.draw())
        this.animationFrame = window.requestAnimationFrame(()=> this.animate());
    }
}

export const game = new Game();