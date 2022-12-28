import axios from "axios";

class AnimeService{
    constructor(){
        this.baseUrl="http://localhost:4000/";

    }
    getAnime(){
        return axios.get(this.baseUrl+"anime")
    }
    deleteAnime(aid){
        return axios.delete(this.baseUrl+"anime/" +aid);
    }
    addAnime(anime){
        return axios.post(this.baseUrl+"anime",anime);
    }   
    updateAnime(anime){
        return axios.put(this.baseUrl+"anime/"+anime)
    }                        
}

export default new AnimeService();