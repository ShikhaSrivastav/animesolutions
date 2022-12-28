
import { Link } from 'react-router-dom';
//import GalleryCard from './GalleryCard'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.png'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img9 from '../images/img9.webp'
import img10 from '../images/img10.webp'
import img11 from '../images/img11.jpg'
import img12 from '../images/img12.jpg'
import img13 from '../images/img13.jpg'
import img14 from '../images/img14.jpg'
import img16 from '../images/img16.jpg'
import img17 from '../images/img17.jpg'
import img18 from '../images/img18.jpg'
import img19 from '../images/img19.webp'
import img20 from '../images/img20.jpg'
import img21 from '../images/img21.jpg'
import img22 from '../images/img22.jpg'
import img23 from '../images/img23.jpg'
import img24 from '../images/img24.jpg'
import img25 from '../images/img25.jpg'
import img26 from '../images/img26.jpg'
import img27 from '../images/img27.jpg'
import img28 from '../images/img28.jpg'
import img29 from '../images/img29.webp'
import img30 from '../images/img30.jpg'
import './Gallery.css'

const Gallery=()=>{
return(
    <div>
    <div className='container'>
    <div className='row'>
     
         <img src={img1} class="img1" className='col-sm-12 col-md-6 col-lg-4' alt='image 1' id='img' />
        <img src={img2} class="img2" className='col-sm-12 col-md-6 col-lg-4' alt='image 2' id='img' />
        <img src={img3} class="img3" className='col-sm-12 col-md-6 col-lg-4' alt='image 3' id='img' />
        <img src={img4} class="img4" className='col-sm-12 col-md-6 col-lg-4'  alt='image 4' id='img' />
        <img src={img5} class="img5" className='col-sm-12 col-md-6 col-lg-4' alt='image 5' id='img' />
        <img src={img6} class="img6" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img7} class="img7" className='col-sm-12 col-md-6 col-lg-4' alt='image 7' id='img' />
        <img src={img9} class="img9" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img10} class="img10" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img11} class="img11" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img12} class="img12" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img13} class="img13" className='col-sm-12 col-md-6 col-lg-4'  alt='image 6' id='img' />
        <img src={img14} class="img14" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img16} class="img16" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img17} class="img17" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img18} class="img18" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img19} class="img19" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img20} class="img20" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img21} class="img21" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img22} class="img22" className='col-sm-12 col-md-6 col-lg-4'  alt='image 6' id='img' />
        <img src={img23} class="img23" className='col-sm-12 col-md-6 col-lg-4'  alt='image 6' id='img' />
        <img src={img24} class="img24" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img25} class="img25" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img26} class="img26" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img27} class="img27" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img28} class="img28" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img29} class="img29" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
        <img src={img30} class="img30" className='col-sm-12 col-md-6 col-lg-4' alt='image 6' id='img' />
    
         {/* <Link to="/gallerycard">
             <button type='button' name='btn' id='btn' class='btn btn-primary'>Gallery</button>
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
        </div>
)
}
export default Gallery;