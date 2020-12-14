import {Diamond} from './Diamond.esm.js';

export class GameState{
    constructor(level, leftMovements, pointToWin, diamonds, diamondsSpriteImages){
        let _leftMovements = leftMovements;
        let _playerPoints = 0;
        this._pointsToWin = pointToWin;
        this._level = level;
        let _gameBoard = diamonds.map(({x, y, row, column, kind}) => new Diamond(x, y, row, column, kind, diamondsSpriteImages))

        this.getLeftMovements = ()=> _leftMovements;
        this.deacrasePointsMovement = ()=> _leftMovements--;
        this.increasePotntsMovement = ()=> _leftMovements++;
        this.increasePlayerPoints = points => _playerPoints += points;
        this.getPlayerPoints = ()=> _playerPoints;
        this.getGameBoard = ()=> _gameBoard;

        this.isPlayerWinner = () => _playerPoints >= this._pointsToWin;
    }

    get pointsToWin(){
        return this._pointsToWin;
    }

    get level(){
        return this._level;
    }
}