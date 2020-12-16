import {Common, VISIBLE_SCREEN, HIDDEN_SCREEN} from './Common.esm.js'

const CLASS_FOR_WINNING_SCREEN = 'end-screen--is-win';

const GAME_RESULT_SCREEN_CONTAINER_ID = 'js-game-result-container';
const GAME_RESULT_ID = 'js-game-result';
const GAME_RESULT_USER_POINTS_ID = 'js-user-points';
const GAME_RESULT_HIGHT_SCORE_ID = 'js-hight-score';
const GAME_RESULT_BACK_BUTTON_ID = 'js-back-to-levels';
const GAME_RESULT_RESTART_LEVEL_ID = 'js-restart-level';

class ResultScreen extends Common{
    constructor(){
        super(GAME_RESULT_SCREEN_CONTAINER_ID);

        this.bindToElements();
    }

    bindToElements(){
        this.userPointsContainer = this.bindToElement(GAME_RESULT_USER_POINTS_ID);
        this.hightScoreContainer = this.bindToElement(GAME_RESULT_HIGHT_SCORE_ID);
        this.gameResuleContainer = this.bindToElement(GAME_RESULT_ID);

        const backToLevelsButton = this.bindToElement(GAME_RESULT_BACK_BUTTON_ID);
        const restartLevelButton = this.bindToElement(GAME_RESULT_RESTART_LEVEL_ID);

        backToLevelsButton.addEventListener('click', ()=> console.log('wróć'));
        restartLevelButton.addEventListener('click', ()=> console.log('reset'));
    }

    viewResultScreen(isGameWin, playerPoints, level){
        if(isGameWin){
            this.element.classList.add(CLASS_FOR_WINNING_SCREEN);
        }else{
            this.element.classList.remove(CLASS_FOR_WINNING_SCREEN);
        }

        this.changeVisibilityOfScreen(this.element, VISIBLE_SCREEN)

        this.gameResuleContainer.textContent = isGameWin ? 'Wygrałeś!' : 'Przegrałeś!';
        this.userPointsContainer.textContent = String(playerPoints)
        this.hightScoreContainer.textContent = 7000;
    }
}


export const resultScreen = new ResultScreen();