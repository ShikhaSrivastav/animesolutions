import axios from "axios";

class AnimeService{
    constructor(){
        this.baseUrl="http://localhost:4000/";

    }
    getAnime(){
        return axios.get(this.baseUrl+"anime")
    }
    deleteAnime(id){
        return axios.delete(this.baseUrl+"anime/" +id);
    }
    addAnime(anime){
        return axios.post(this.baseUrl+"anime",anime);
    }
}

export default new AnimeService();