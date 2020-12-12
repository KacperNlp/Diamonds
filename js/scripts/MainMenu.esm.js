import {Common, HIDDEN_SCREEN, VISIBLE_SCREEN} from './Common.esm.js';
import {levelSelect} from './LevelSelect.esm.js';
import {CANVAS_HEIGHT, CANVAS_WIDTH} from './Canvas.esm.js'

const SCALE_PROPERTY = '--scale-value';
const START_SCREEN_ID = 'js-start-screen';
const START_SCREEN_GAME_BUTTON_ID = 'js-game-button';
const START_SCREEN_SETTINGS_BUTTON_ID = 'js-settings-button';

class MainMenu extends Common{
    constructor(){
        super(START_SCREEN_ID);
        this.bindToGameElements();
        window.addEventListener('resize', this.resizeGameWindow())
    }
    #levelSelect = levelSelect;

    bindToGameElements(){
        const gameStartButton = this.bindToElement(START_SCREEN_GAME_BUTTON_ID);
        const gameSettingsButton = this.bindToElement(START_SCREEN_SETTINGS_BUTTON_ID);

        gameStartButton.addEventListener('click', this.showLevelScreen);
        gameSettingsButton.addEventListener('click', this.showSettingsSecreen);
    }

    showLevelScreen=()=>{
        this.changeVisibilityOfScreen(this.element, HIDDEN_SCREEN)
        this.changeVisibilityOfScreen(this.#levelSelect.element, VISIBLE_SCREEN)
    }

    showSettingsSecreen=()=>{
        console.log('game settings')
    }

    resizeGameWindow(){
        const {innerWidth: width, innerHeight: height} = window;

        const scale = Math.min(width/CANVAS_WIDTH, height/CANVAS_HEIGHT);

        document.documentElement.style.setProperty(SCALE_PROPERTY, scale);
    }

}

export const mainMenu = new MainMenu();