class Media{
    
    #backgroundImage = null;
    #diamondSprite = null;

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
}

export const media = new Media();