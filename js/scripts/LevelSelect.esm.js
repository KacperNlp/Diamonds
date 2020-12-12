import {Common, HIDDEN_SCREEN, VISIBLE_SCREEN} from './Common.esm.js';
import {canvas} from './Canvas.esm.js'
import {loader, DATALOADED_EVENT_NAME} from './Loader.esm.js'
import { gameLevels } from './gameLevels.esm.js';
import  {game} from './Game.esm.js'

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
    #loader = loader;
    #game = game;

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
        this.loadLevel(event.currentTarget.value)
    }

    loadLevel(level){
        const background = this.#loader.loadImage('images/levelbackground.png');
        window.addEventListener(DATALOADED_EVENT_NAME, ()=> this.#game.playLevel(level))
    }
}

export const levelSelect = new LevelSelect();