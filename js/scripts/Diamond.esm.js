import {Sprite} from './Sprite.esm.js'
import {GAME_BOARD_X_OFFSET, GAME_BOARD_Y_OFFSET} from './Game.esm.js'

const DIAMOND_ORIGINAL_SIZE = 32;
export const DIAMOND_SIZE = 48;
const NUMBER_OF_DIAMONDS_TYPES = 6 ;

const DIAMOND_ZOOM = DIAMOND_SIZE/DIAMOND_ORIGINAL_SIZE;

export class Diamond extends Sprite{
    constructor(oldRow, oldColumn, currentRow, currentColumne, kind, diamondSpriteImage){
        const offset = {
        x:GAME_BOARD_X_OFFSET,
        y:GAME_BOARD_Y_OFFSET,
        };
        super(
            oldRow, 
            oldColumn,
            DIAMOND_ORIGINAL_SIZE,
            DIAMOND_ORIGINAL_SIZE,
            diamondSpriteImage,
            NUMBER_OF_DIAMONDS_TYPES,
            offset
            );
        this.currentRow = currentRow;
        this.currentColumne = currentColumne;
        this.kind = kind;
        this.match = 0;
    }

    draw(){
        super.draw(this.kind, DIAMOND_ZOOM) //in this place we have got setted diamond in Sprite (we set his props in constructor) and thanks that we can call the function which draw for us this setted diamond
    }
}