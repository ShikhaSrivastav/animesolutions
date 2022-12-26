import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimeService from './AnimeService';
import '../components/AnimeList.css'


const AnimeList = () => {
    let [animearr, setanimearr] = useState([])
    let [flag, setFlag] = useState(false)

    //initialization of data
    useEffect(() => {
        AnimeService.getAnime().
            then((response) => {
                setanimearr(response.data);
            })
            .catch((err) => { console.log("error occured", err) })
    }, []);
    useEffect(() => {
        AnimeService.getAnime().
            then((response) => {
                setanimearr(response.data);
            })
            .catch((err) => { console.log("error occured", err) })
    }, [flag]);
    const deleteData = (id) => {
        AnimeService.deleteAnime(id).
            then((result) => {
                console.log(result.data)
                setFlag(true);

            }).catch((err) => {
                console.log("error occured");
            }
            )
    }
    const renderList = () => {
        return animearr.map((anime) => {
            return <tr key={anime.aid}>
                <td>{anime.aid}</td>
                <td>{anime.name}</td>
                <td>{anime.year}</td>
                <td>{anime.rating}</td>
                <td>
                    <Link to={{ pathname: `/view/${anime.name}`, state: { anime: anime } }}>
                        <button type="button" name="btn" id="view" className="btn btn-success">View</button>
                    </Link>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <Link to="/addanime">
                        <button type="button" name="btn" id="add" className="btn btn-primary">Add</button>
                    </Link>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <Link to={{ pathname: `edit/${anime.name}`, state: { anime: anime } }}>
                        <button type="button" name="btn" id="edit" className="btn btn-secondary">Edit</button>
                    </Link>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button type="button" name="btn" id="delete" className="btn btn-danger" onClick={() => deleteData(anime.aid)}>Delete</button>
                </td>
            </tr>
        })
    }

    return (
        <div>
            <div id="bg-image"></div>
            <div id="bg-table">
                {/* <div > */}
                <table >
                    <tr>
                        <thead>
                            <th>Anime ID</th>
                            <th>Anime Name</th>
                            <th>Year Of <br></br>Release</th>
                            <th>Rating</th>
                        </thead>
                        <tbody>
                            {renderList()}
                        </tbody>
                    </tr>
                </table>
            </div>
         </div>
        // </div>
    )
}
export default AnimeList;