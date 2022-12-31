
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useLocation,Link} from 'react-router-dom'
import img from '../images/collage.png'
const View=(props)=>{
    let[animeob,setanimeob]=useState({aid:"",name:"",year:"",rating:""});
    let state=useLocation().state;
    useEffect(()=>{
        setanimeob(...state.animedata);
    })
    // const renderList=(props)=>{
    //     return props.map((anime)=>{
    //         return 
    //     })
    // }
    return(
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Movie Details</Card.Title>
        <Card.Text>
          ID: {animeob.aid} <br/>
          Name:{animeob.name}<br/>
          Year Of Release : {animeob.year}<br/>
          Rating : {animeob.rating}
        </Card.Text>
        <Link to="/list">
        <Button variant="primary">Go to Anime List</Button>
        </Link>
      </Card.Body>
    </Card>
        </div>
    )
}
export default View;