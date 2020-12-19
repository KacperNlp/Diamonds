class Media{

    constructor(){
        this.musicVolume = .3;
        this.soundVolume = .3;
        this.allowedMusic = true;
        this.allowedSound = true;
        this._swapSound = null;
        this._backgroundMusic = null;
        this.isInLevel = false;
    }
    
    #backgroundImage = null;
    #diamondSprite = null;

    //increase or decrease music
    increaseMusiceVolume(){
        this.musicVolume += 0.1;

        if(this.musicVolume > 1) this.musicVolume = 1;

        this._backgroundMusic.volume = this.musicVolume;
    }

    decreaseMusiceVolume(){
        this.musicVolume -= 0.1;

        if(this.musicVolume < 0) this.musicVolume = 0;

        this._backgroundMusic.volume = this.musicVolume;
    }

    //increase or decrease sound
    increaseSoundVolume(){
        this.soundVolume += 0.1;

        if(this.soundVolume > 1) this.soundVolume = 1;

        this._backgroundMusic.volume = this.soundVolume;
    }

    decreaseSoundVolume(){
        this.soundVolume -= 0.1;

        if(this.soundVolume < 0) this.soundVolume = 0;

        this._backgroundMusic.volume = this.soundVolume;
    }

    //play or pause musice
    playBackgroundMusic(){
        if(!this.allowedMusic) return;

        this._backgroundMusic.loop = true;
        this._backgroundMusic.play();
    }

    stopBackgroundMusice(){
        this._backgroundMusic.pause();
    }

    //game sound
    playSwapSound(){
        if(!this.allowedSound) return;

        this._swapSound.play();
    }

    set swapSound(sound){
        this._swapSound = sound;
        this._swapSound.volume = this.soundVolume;
    }

    get swapSound(){
        return !!this._swapSound;
    }

    set backgroundMusic(music){
        this._backgroundMusic = music;
        this._backgroundMusic.volume = this.musicVolume;
    }

    get backgroundMusic(){
        return !!this._backgroundMusic;
    }

    set backgroundImage(imageObject){
        if(!imageObject instanceof Image) return null;

        this.#backgroundImage = imageObject;
    }

    get backgroundImage(){
        return this.#backgroundImage;
    }

    set diamondSprite(imageObject){
        if(!imageObject instanceof Image) return null;
        this.#diamondSprite = imageObject;
    }

    get diamondSprite(){
        return this.#diamondSprite;
    }

    toggleMusicOnOff(){
        if(this.allowedMusic){
            this.allowedMusic = false;
            this.stopBackgroundMusice();
        }else{
            this.allowedMusic = true;
            this.stopBackgroundMusice();
        }
    }
}

export const media = new Media();