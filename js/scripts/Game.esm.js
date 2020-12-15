import  {Common, VISIBLE_SCREEN} from './Common.esm.js';
import {loader, DATALOADED_EVENT_NAME} from './Loader.esm.js'
import {gameLevels} from './gameLevels.esm.js'
import { canvas } from './Canvas.esm.js';
import {Diamond, DIAMOND_SIZE} from './Diamond.esm.js'
import {media} from './Media.esm.js';
import {GameState} from './GameState.esm.js'
import {mouseController} from './MouseController.esm.js'

const DIAMONDS_ARRAY_WIDTH = 8;
const DIAMONDS_ARRAY_HEIGHT = DIAMONDS_ARRAY_WIDTH + 1;


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
        this.handleMouseState();
        this.#canvas.drawGameOnCanvas(gameSettings);
        this.gameState.getGameBoard().forEach(diamond => diamond.draw())
        this.animationFrame = window.requestAnimationFrame(()=> this.animate());
    }

    handleMouseState(){
        const isSwaping = !this.gameState.getIsSwaping ;
        const isMoving = !this.gameState.getIsMoving;

        if(mouseController.clicked && isMoving && isSwaping){
            mouseController.state++;
        }
    }

    handleMouceClick(){
        if(!mouseController.clicked) return;

        const xClicked = Math.floor((mouseController.x - GAME_BOARD_X_OFFSET) / DIAMOND_SIZE);
        const yClicked = Math.floor((mouseController.y - GAME_BOARD_Y_OFFSET) / DIAMOND_SIZE);

        if(!yClicked || xClicked >= DIAMONDS_ARRAY_WIDTH || yClicked >= DIAMONDS_ARRAY_HEIGHT) {
            mouseController.state = 0;
            return;
        }

        if(mouseController.state === 1){
            mouseController.firstClick = {
                x: xClicked,
                y: yClicked,
            }
        }else if( mouseController.state === 2){
            mouseController.secondClick = {
                x: xClicked,
                y: yClicked,
            }
            mouseController.state = 0;

            if(Math.abs(mouseController.firstClick.x - mouseController.secondClick.x) + Math.abs(mouseController.firstClick.y - mouseController.secondClick.y) !== 1){
                return;
            }
    
            this.swapDiamond();
    
            this.gameState.setIsSwaping(true);
            this.gameState.deacrasePointsMovement();
            
        }

        mouseController.clicked = false;
    }
}

export const game = new Game();