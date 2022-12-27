
import { Link } from 'react-router-dom';
//import GalleryCard from './GalleryCard'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.png'
import img6 from '../images/img6.jpg'
import './Gallery.css'

const Gallery=()=>{
return(
    <div>
    <div>
         <img src={img1} className="img1" alt='image 1' id='img' />
        <img src={img2} className="img2" alt='image 2' id='img' />
        <img src={img3} className="img3" alt='image 3' id='img' />
        <img src={img4} className="img4"  alt='image 4' id='img' />
        <img src={img5} className="img5" alt='image 5' id='img' />
        <img src={img6} className="img6" alt='image 6' id='img' />
    
         {/* <Link to="/gallerycard">
             <button type='button' name='btn' id='btn' className='btn btn-primary'>Gallery</button>
        </Link>  */}
        </div> 

        {/* <div class="card" style="width: 18rem;">
                 <img src={img1} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">My Neighbor Totoro</h5>
                <p class="card-text">My Neighbor Totoro (Japanese: となりのトトロ, Hepburn: Tonari no Totoro) is a 1988 Japanese animated fantasy film written and directed by Hayao Miyazaki and animated by Studio Ghibli for Tokuma Shoten. </p>
                 <a href="#" class="btn btn-primary">Fantasy, Anime</a>
                 </div>
            </div>
            <div class="card" style="width: 18rem;">
                 <img src={img2}class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Wishper Of The Heart</h5>
                <p class="card-text">Whisper of the Heart (Japanese: 耳をすませば, Hepburn: Mimi o Sumaseba, literally "If You Listen Closely") is a 1995 Japanese animated romantic drama film directed by Yoshifumi Kondō and written by Hayao Miyazaki based on the 1989 manga of the same name by Aoi Hiiragi. </p>
                 <a href="#" class="btn btn-primary">Animation,Drama,Family,Romance</a>
                 </div>
            </div> */}
        </div>
)
}
export default Gallery;