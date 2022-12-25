import './Footer.css'
import {EnvelopeAt, GeoFill, Instagram, TelephoneInboundFill, Youtube} from 'react-bootstrap-icons';
const Footer=()=>{
return(
    <div>
         <p id='footer'>
         {/* &#9679; */}
         <table>
            <tr>
                <td><EnvelopeAt></EnvelopeAt>
                <a href="mailto:animeMotion@gmail.com">animeMotion@gmail.com</a> </td>
                {/* <td><i class="fi fi-brands-instagram"></i> </td> */}
                <td><Instagram></Instagram>@animeMotion</td>
                {/* <td><i class="fi fi-br-marker"> </i></td> */}
                <td>
                <GeoFill></GeoFill>
                 Pune  </td>
                {/* <td><i class="fi fi-bs-phone-call"></i></td> */}
                <td>
                <TelephoneInboundFill></TelephoneInboundFill>
                (513)555 - 7911 </td>
                {/* <i class="fi fi-br-envelope"></i> */}
                <td><Youtube></Youtube><a href='https://youtube.com/@anonymousgirl6403'>animeMotion youtube</a></td>
            </tr>
         </table>
         
        </p>
    </div>
)

}
export default Footer;