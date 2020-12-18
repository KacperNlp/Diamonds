class UserData{
    constructor(){
        if(!localStorage.length){
            localStorage.setItem('1', JSON.stringify({active:true, score:0}));
        }
    }
    
    checkAvailabilityLevel(levelNumber){
        const item = localStorage.getItem(String(levelNumber));

        if(!item) return false;

        const {active} = JSON.parse(item);

        return active;
    }

    addNewLevel(levelNumber){
        localStorage.setItem(String(levelNumber), JSON.stringify({active:true, score:0}));
    }

    getHightScore(level){
        const item = localStorage.getItem(String(level));

        const {score} = JSON.parse(item);

        return score;
    }

    setHightScore(newBestScore, level){
        localStorage.setItem(String(level), JSON.stringify({active:true, score: newBestScore}));
    }
}

export const userData = new UserData();