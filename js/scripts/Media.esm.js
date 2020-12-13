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
}

export const media = new Media();