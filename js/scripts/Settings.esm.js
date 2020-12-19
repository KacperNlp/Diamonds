import {Common} from './Common.esm.js'


const SETTINGS_SCREEN_ID ='js-settings-screen';
//game sounds
const GAME_SOUNDS_ON_OFF_BUTTON_ID = 'js-game-sounds';
const GAME_SOUNDS_INCREASE_BUTTON_ID ='js-game-sounds-increase';
const GAME_COUNDS_DECREASE_BUTTON_ID = 'js-game-sounds-decrease';
//music
const GAME_MUSIC_ON_OFF_BUTTON_ID = 'js-music';
const GAME_MUSIC_INCEASE_BUTTON_ID = 'js-musice-increase';
const GAME_MUSIC_DECREASE_BUTTON_ID = 'js-music-decrease';
//exite button
const EXITE_SETTINGS_BUTTON_ID = 'js-settings-exite';


class Settings extends Common{
    constructor(){
        super(SETTINGS_SCREEN_ID);
    }

    bindToElements(){
        
    }
}

export const settings = new Settings();