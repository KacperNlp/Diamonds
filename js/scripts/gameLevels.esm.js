import {DIAMOND_SIZE} from './Diamond.esm.js'
import {GAME_BOARD_Y_OFFSET} from './Game.esm.js'


const NUMBER_OF_COLUMNS = 8;
const NUMBER_OF_ROWS = 7;

export const NUMBER_OF_DIAMONDS_KINDS = 6;
export const EMPTY_BLOCK = 99;

export const gameLevels = [
    {
        level: 1,
        numberOfMovement: 30,
        pointToWin: 7000,
        board: [
            //first row
            {x:0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:0, column:0, kind: EMPTY_BLOCK},
            {x:0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:1, column:0, kind: EMPTY_BLOCK},
            {x:0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:2, column:0, kind: EMPTY_BLOCK},
            {x:0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:3, column:0, kind: EMPTY_BLOCK},
            {x:0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:4, column:0, kind: EMPTY_BLOCK},
            {x:0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:5, column:0, kind: EMPTY_BLOCK},
            {x:0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:6, column:0, kind: EMPTY_BLOCK},
            {x:0 * DIAMOND_SIZE, y: -1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:7, column:0, kind: EMPTY_BLOCK},
            //second row
            {x:0 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:0, column:1, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:1 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:1, column:1, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:2 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:2, column:1, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:3 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:3, column:1, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:4 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:4, column:1, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:5 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:5, column:1, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:6 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:6, column:1, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:7 * DIAMOND_SIZE, y: 0 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:7, column:1, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            //third row
            {x:0 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:0, column:2, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:1 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:1, column:2, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:2 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:2, column:2, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:3 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:3, column:2, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:4 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:4, column:2, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:5 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:5, column:2, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:6 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:6, column:2, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:7 * DIAMOND_SIZE, y: 1 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:7, column:2, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            //fourth row
            {x:0 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:0, column:3, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:1 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:1, column:3, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:2 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:2, column:3, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:3 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:3, column:3, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:4 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:4, column:3, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:5 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:5, column:3, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:6 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:6, column:3, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:7 * DIAMOND_SIZE, y: 2 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:7, column:3, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            //fifth row
            {x:0 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:0, column:4, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:1 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:1, column:4, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:2 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:2, column:4, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:3 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:3, column:4, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:4 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:4, column:4, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:5 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:5, column:4, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:6 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:6, column:4, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:7 * DIAMOND_SIZE, y: 3 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:7, column:4, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            //sixth row
            {x:0 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:0, column:5, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:1 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:1, column:5, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:2 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:2, column:5, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:3 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:3, column:5, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:4 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:4, column:5, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:5 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:5, column:5, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:6 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:6, column:5, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:7 * DIAMOND_SIZE, y: 4 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:7, column:5, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            //seventh row
            {x:0 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:0, column:6, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:1 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:1, column:6, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:2 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:2, column:6, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:3 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:3, column:6, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:4 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:4, column:6, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:5 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:5, column:6, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:6 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:6, column:6, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:7 * DIAMOND_SIZE, y: 5 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:7, column:6, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            //eighth row
            {x:0 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:0, column:7, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:1 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:1, column:7, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:2 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:2, column:7, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:3 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:3, column:7, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:4 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:4, column:7, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:5 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:5, column:7, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:6 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:6, column:7, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:7 * DIAMOND_SIZE, y: 6 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:7, column:7, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            //ninth row
            {x:0 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:0, column:8, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:1 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:1, column:8, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:2 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:2, column:8, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:3 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:3, column:8, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:4 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:4, column:8, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:5 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:5, column:8, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:6 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:6, column:8, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
            {x:7 * DIAMOND_SIZE, y: 7 * DIAMOND_SIZE + GAME_BOARD_Y_OFFSET, row:7, column:8, kind: Math.floor(Math.random() * NUMBER_OF_DIAMONDS_KINDS)},
        ]

    },{
        level: 2,
        
    }
]