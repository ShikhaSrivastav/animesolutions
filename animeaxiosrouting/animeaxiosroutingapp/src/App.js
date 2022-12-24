
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AnimeHome from './components/AnimeHome';
import AnimeList from './components/AnimeList';
import AddAnime from './components/AddAnime';
import Search from './components/Search';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <h1>Welcome</h1>
      <Header></Header>
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/home" exact component={AnimeHome}></Route>
          <Route path="/list" component={AnimeList}></Route>
          <Route path="/add" component={AddAnime} ></Route>
          <Route path="/view/:name" component={Search}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
