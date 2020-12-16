import  {Common, VISIBLE_SCREEN} from './Common.esm.js';
import {loader, DATALOADED_EVENT_NAME} from './Loader.esm.js'
import {EMPTY_BLOCK, gameLevels, NUMBER_OF_DIAMONDS_KINDS} from './gameLevels.esm.js'
import { canvas } from './Canvas.esm.js';
import {Diamond, DIAMOND_SIZE} from './Diamond.esm.js'
import {media} from './Media.esm.js';
import {GameState} from './GameState.esm.js'
import {mouseController} from './MouseController.esm.js'

const DIAMONDS_ARRAY_WIDTH = 8;
const DIAMONDS_ARRAY_HEIGHT = DIAMONDS_ARRAY_WIDTH + 1;
const SWAPING_SPEED = 8;
const LAST_DIAMONDS_ARRAY_INDEX = DIAMONDS_ARRAY_WIDTH * DIAMONDS_ARRAY_HEIGHT - 1;
const TRANSPARENCY_SPEED = 25;


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
        this.handleMouseClick();
        this.findMatches();
        this.moveDiamonds();
        this.hideDiamonds();
        this.countScores();
        this.revertSwap();
        this.clearMatched();
        this.#canvas.drawGameOnCanvas(this.gameState);
        this.gameState.getGameBoard().forEach(diamond => diamond.draw())
        this.animationFrame = window.requestAnimationFrame(()=> this.animate());
    }

    handleMouseState(){
        const isSwaping = !this.gameState.getIsSwaping();
        const isMoving = !this.gameState.getIsMoving();

        if(mouseController.clicked && isMoving && isSwaping){
            mouseController.state++;
        }
    }

    handleMouseClick(){
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

            this.swapDiamonds();
    
            this.gameState.setIsSwaping(true);
            this.gameState.deacrasePointsMovement();
            
        }

        mouseController.clicked = false;
    }

    findMatches(){
        this.gameState.getGameBoard().forEach((diamond, index, diamonds) =>{

            if(diamond.kind === EMPTY_BLOCK || index ===  LAST_DIAMONDS_ARRAY_INDEX) return;

            if(diamonds[index - 1].kind === diamond.kind && diamonds[index + 1].kind === diamond.kind){

                if(Math.floor((index - 1) / DIAMONDS_ARRAY_WIDTH) === Math.floor((index + 1) / DIAMONDS_ARRAY_WIDTH)){

                    for(let counter = -1; counter <= 1; counter++){
                        diamonds[index + counter].match++;
                    }
                }
            }

            if(index >= DIAMONDS_ARRAY_WIDTH 
                && index < LAST_DIAMONDS_ARRAY_INDEX - DIAMONDS_ARRAY_WIDTH + 1 
                && diamonds[index + DIAMONDS_ARRAY_WIDTH].kind === diamond.kind
                && diamonds[index - DIAMONDS_ARRAY_WIDTH].kind === diamond.kind){

                    if((index - DIAMONDS_ARRAY_WIDTH) % DIAMONDS_ARRAY_WIDTH === (index + DIAMONDS_ARRAY_WIDTH) % DIAMONDS_ARRAY_WIDTH){

                        for(let counter = -DIAMONDS_ARRAY_WIDTH; counter <= DIAMONDS_ARRAY_WIDTH; counter += DIAMONDS_ARRAY_WIDTH){
                            diamonds[index + counter].match++;
                        }
                    }
                }
        })
    }

    swapDiamonds(){
        const firstClicked = mouseController.firstClick.y * DIAMONDS_ARRAY_WIDTH + mouseController.firstClick.x;
        const secondClicked = mouseController.secondClick.y * DIAMONDS_ARRAY_WIDTH + mouseController.secondClick.x;

        const firstDiamond = this.gameState.getGameBoard()[firstClicked];
        const secondDiamond = this.gameState.getGameBoard()[secondClicked];

        this.swap(firstDiamond, secondDiamond)
    }


    moveDiamonds(){
        this.gameState.setIsMoving(false);

        this.gameState.getGameBoard().forEach(diamond =>{
            let dx;
            let dy;

            for(let speedSwap = 0; speedSwap < SWAPING_SPEED; speedSwap++){


                dx = diamond.x - diamond.currentRow * DIAMOND_SIZE;
                dy = diamond.y - diamond.currentColumne * DIAMOND_SIZE;

                if(dx){
                    diamond.x -= dx/Math.abs(dx);
                }

                if(dy){
                    diamond.y -= dy/Math.abs(dy);
                }
            }

            if(dy || dx){
                this.gameState.setIsMoving(true)
            }
        })
    }

    hideDiamonds(){
        if(this.gameState.getIsMoving()) return;

        this.gameState.getGameBoard().forEach(diamond =>{
            if(diamond.match && diamond.alpha >= TRANSPARENCY_SPEED){
                diamond.alpha -= TRANSPARENCY_SPEED;
                console.log(diamond.alpha)
                this.gameState.setIsMoving(true);
            }
        })
    }

    countScores(){
        this.scores = 0;
        this.gameState.getGameBoard().forEach(diamond => this.scores += diamond.match);


        if(!this.gameState.getIsMoving() && this.scores){
            this.gameState.increasePlayerPoints(this.scores);
        }
    }

    revertSwap(){
        if(this.gameState.getIsSwaping() && !this.gameState.getIsMoving()){
            
            if(!this.scores){
                this.swapDiamonds();
                this.gameState.increasePotntsMovement();
            }
            
            this.gameState.setIsSwaping(false);
        }
    }

    clearMatched(){

        if(this.gameState.getIsMoving()) return;

        this.gameState.getGameBoard().forEach((_, id, diamonds)=>{

            const index = LAST_DIAMONDS_ARRAY_INDEX - id;
            const column = Math.floor(index / DIAMONDS_ARRAY_WIDTH);
            const row = Math.floor(index % DIAMONDS_ARRAY_WIDTH);

            if(diamonds[index].match){

                for(let counter = column; counter >= 0; counter--){
                    if(!diamonds[counter * DIAMONDS_ARRAY_WIDTH + row].match){
                        this.swap(diamonds[counter * DIAMONDS_ARRAY_WIDTH + row], diamonds[index]);
                        break;
                    }
                }
            }

        })


        this.gameState.getGameBoard().forEach((diamond, index) =>{
            const row = Math.floor(index % DIAMONDS_ARRAY_WIDTH) * DIAMOND_SIZE;

            if(index < DIAMONDS_ARRAY_WIDTH){

                diamond.kind = EMPTY_BLOCK;
                diamond.match = 0;

            }else if(diamond.match || diamond.kind === EMPTY_BLOCK){
                diamond.kind = Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS);
                diamond.y = 0;
                diamond.x = row;
                diamond.match = 0;
                diamond.alpha = 255;
            }
        })
    }

    swap(firstDiamond, secondDiamond){
        [
            firstDiamond.x,
            firstDiamond.y,
            firstDiamond.match,
            firstDiamond.kind,
            firstDiamond.alpha,
            secondDiamond.x,
            secondDiamond.y,
            secondDiamond.match,
            secondDiamond.kind,
            secondDiamond.alpha,
        ] =
        [
            secondDiamond.x,
            secondDiamond.y,
            secondDiamond.match,
            secondDiamond.kind,
            secondDiamond.alpha,
            firstDiamond.x,
            firstDiamond.y,
            firstDiamond.match,
            firstDiamond.kind,
            firstDiamond.alpha,
        ] ;

       this.gameState.setIsMoving(true);
    }
} 

export const game = new Game();