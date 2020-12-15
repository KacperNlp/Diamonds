import {canvas} from './Canvas.esm.js';
import {SCALE_PROPERTY} from './MainMenu.esm.js';

class MouseController{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.state = 0;
        this.clicked = false;

        canvas.element.addEventListener('mousedown', this.mouseDown)
    }

    mouseDown=(e)=>{
        e.preventDefault();

        const scale = Number(document.documentElement.style.getPropertyValue(SCALE_PROPERTY));
        const offset = canvas.element.getBoundingClientRect();

        this.x = (e.clientX - offset.left) / scale;
        this.y = (e.clientY - offset.top) / scale;

        this.clicked = true;
    }
}

export const mouseController = new MouseController();