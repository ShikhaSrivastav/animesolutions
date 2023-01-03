
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AnimeHome from './components/AnimeHome';
import AnimeList from './components/AnimeList';
import AddAnime from './components/AddAnime';
import Search from './components/Search';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import View from './components/View';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <h1>Welcome</h1>
      <Header></Header>
      <NavBar></NavBar>
     
      <Router>
        <Switch>
        <Route path="/" exact component={AnimeHome}></Route>
          <Route path="/home" exact component={AnimeHome}></Route>
          <Route path="/list" component={AnimeList}></Route>
          <Route path="/add" component={AddAnime} ></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/gallery" component={Gallery}></Route>
          <Route path="/contactus" component={ContactUs}></Route>
          <Route path="/view/:name" component={View}></Route>
       
        
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
