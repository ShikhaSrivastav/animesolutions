import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './AddAnime.css'
import AnimeService from './AnimeService';

const AddAnime=()=>{  
    let [animeob,setanimeob]=useState([]); 
    let history=useHistory();
    const handleChange=(event)=>{
    const {name,value}=event.target;
    setanimeob({...animeob,[name]:value});

    }
    const addAnime=()=> {
        AnimeService.addAnime(animeob).
        then((result)=>{
            console.log(result);
            history.push("/list");
        })

    }
    return(
        <div>
        <div id='box'>
            <form>
                <table>
                    <tr>
                    <td>
                        Anime ID
                    </td>
                        <td>
                            <input type="text" name="aid" id="id"
                            value={animeob.aid}
                            onChange={handleChange}>

                            </input>

                        </td>
                        </tr>
                        <tr>
                        <td>
                        Anime Name
                    </td>
                        <td>
                            <input type="text" name="name" id="name"
                            value={animeob.name}
                            onChange={handleChange}></input>

                        </td>
                        </tr>
                        <tr>
                        <td>

                        Year Of Release
                    </td>
                        <td>
                            <input type="text" name="year" id="yor" 
                            value={animeob.year}
                            onChange={handleChange}></input>

                        </td>
                        </tr>
                        <tr>
                        <td>
                        Rating
                    </td>
                        <td>
                            <input type="text" name="rating" id="rating"
                            value={animeob.rating}
                            onChange={handleChange}></input>

                        </td>
                    </tr>
                    <tr >
                    <td>
                       
                        <button type='button' id='btn' name='btn' className='btn btn-outline-primary' onClick={addAnime}>Add Anime</button>
                        </td>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}
export default AddAnime;