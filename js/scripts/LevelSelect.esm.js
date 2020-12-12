import {Common, HIDDEN_SCREEN, VISIBLE_SCREEN} from './Common.esm.js';
import {canvas} from './Canvas.esm.js'

const LEVEL_SELECT_ID = 'js-level-select-screen';
const LEVEL_SELECT_BUTTON_CLASS = 'level-select__button';

const buttons = [{
    level: 1,
}]

class LevelSelect extends Common{
    constructor(){
        super(LEVEL_SELECT_ID);

        buttons.forEach(gameLevel => this.createButton(gameLevel.level))
    }

    #canvas = canvas;

    createButton(value){
        const button = document.createElement('button');

        button.type= button;
        button.classList.add('level-select__button');
        button.textContent = value;
        button.value = value;

        button.addEventListener('click', this.buttonOnClickHandler)

        this.element.appendChild(button);
    }

    buttonOnClickHandler=(event)=>{
        event.preventDefault();

        this.changeVisibilityOfScreen(this.element, HIDDEN_SCREEN);
        this.changeVisibilityOfScreen(this.#canvas.element, VISIBLE_SCREEN);
    }
}

export const levelSelect = new LevelSelect();