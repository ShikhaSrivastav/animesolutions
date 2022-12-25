import './NavBar.css';
const NavBar=()=>{
    return(
        <div>
    <div>
    <ul>
      <li><a href="/home" >Home</a></li>
      <li><a href="/list" >Anime List</a></li>
      <li><a href="/add" >Add</a></li>
      <li><a href="/view/:name" >Search</a></li>
      <li><a href="/aboutus" >AboutUs</a></li>
      <li><a href="/gallery" >Gallery</a></li>

    </ul>
  </div>
   
   
     <div id="first">
      <table align="right">
          <tr>
    <td>One Spot For Anime</td>   
  </tr>
  <tr>
      <td  align="right">Anime</td>
  </tr>
  </table>
    </div>
    </div>
    )
}
export default NavBar;