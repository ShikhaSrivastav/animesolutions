import { Link } from "react-router-dom";
import AnimeService from "./AnimeService";
import View from "./View";
import "./Search.css"
import { useEffect, useState } from "react";

const Search = () => {
    let [animeob, setanimeob] = useState([]);
    useEffect(() => {
        AnimeService.getAnime().then((result) => {
            console.log(result.data);
            setanimeob(result.data);

        }).catch((err) => {
            console.log("error occured");
        })

    }, []);

    // const renderList=(animeob)=>{
    //     return animeob.map((anime)=>{
    //         return <View key={anime.aid} animedata={anime}></View>
    //     })
    // }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setanimeob({ ...animeob, [name]: value })
    }
    // <Link to={{pathname:`/view/${emp.empid}`,state:{employee:emp}}}>
    return (
        <div>
            <div id="container">
                <form>
                    <table>
                        <tr>

                            <td>
                                <label for="Enter Movie Name"></label></td>
                            <td>
                               Enter Movie Name : <input type="text" name="name" id="name"
                                    value={animeob.name}
                                    onChange={handleChange} /></td>
                        </tr>
                        
                        <tr>
                        <td></td>
                            <td>
                                <Link to={{ pathname: `/view/${animeob.name}`, state: { animedata: animeob } }}>
                                    <button type="button" name="btn" id="view" className="btn btn-success">Search</button>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>


        </div>
    )


}
export default Search;