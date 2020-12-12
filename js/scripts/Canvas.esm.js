import {Common} from './Common.esm.js';

const GAME_SCREEN_ID = 'js-game-screen';

export const CANVAS_WIDTH = 640;
export const CANVAS_HEIGHT = 480;

class Canvas extends Common{
    constructor(){
        super(GAME_SCREEN_ID);
    }

    configureCanvas(){
        this.context = this.element.getContext('2d');
        this.context.canvas.width = CANVAS_WIDTH;
        this.context.canvas.height = CANVAS_HEIGHT;
        this.context.fillStyle = 'white';
        this.context.font = '20px Arial white';
    }
}

export const canvas = new Canvas()

