import {Diamond} from './Diamond.esm.js';

export class GameState{
    constructor(level, leftMovements, pointToWin, diamonds, diamondsSpriteImages){
        let _leftMovements = leftMovements;
        let _playerPoints = 0;
        let _gameBoard = diamonds.map(({x, y, row, column, kind}) => new Diamond(x, y, row, column, kind, diamondsSpriteImages));
        let _isSwaping = false;
        let _isMoving = false;

        this._pointsToWin = pointToWin;
        this._level = level;

        this.getLeftMovements = ()=> _leftMovements;
        this.deacrasePointsMovement = ()=> _leftMovements--;
        this.increasePotntsMovement = ()=> _leftMovements++;
        this.increasePlayerPoints = points => _playerPoints += points*2;
        this.getPlayerPoints = ()=> _playerPoints;
        this.getGameBoard = ()=> _gameBoard;

        this.getIsSwaping = ()=> _isSwaping;
        this.setIsSwaping = value => _isSwaping = value;

        this.getIsMoving = ()=> _isMoving;
        this.setIsMoving = value => _isMoving = value;

        this.isPlayerWinner = () => _playerPoints >= this._pointsToWin;
    }

    get pointsToWin(){
        return this._pointsToWin;
    }

    get level(){
        return this._level;
    }
}