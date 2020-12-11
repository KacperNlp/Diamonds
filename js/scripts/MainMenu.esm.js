import {Common, HIDDEN_CLASS, VISIBLE_SCREEN} from './Common.js';

const SCALE_PROPERTY = '--scale-value';
const START_SCREEN_ID = 'js-start-screen';
const START_SCREEN_GAME_BUTTON_ID = 'js-game-button';
const START_SCREEN_SETTINGS_BUTTON_ID = 'js-settings-button';

class MainMenu extends Common{
    constructor(){
        super(START_SCREEN_ID);
        this.bindToGameElements();
    }

    bindToGameElements(){
        const gameStartButton = this.bindToElement(START_SCREEN_GAME_BUTTON_ID);
        const gameSettingsButton = this.bindToElement(START_SCREEN_SETTINGS_BUTTON_ID);

        gameStartButton.addEventListener('click', this.showLevelScreen);
        gameSettingsButton.addEventListener('click', this.showSettingsSecreen);
    }

    showLevelScreen(){
        console.log('game level')
    }

    showSettingsSecreen(){
        console.log('game settings')
    }

    resizeGameWindow(){
        const {innerWidth: width, innerHeight: height} = window;

        const scale = Math.min(width/640, height/480);

        document.documentElement.setProperty(SCALE_PROPERTY, scale);
    }

}

export const mainMenu = new MainMenu();