
import './App.css';
import NavBar from './components/Navbar';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import Add from './components/Add';
import {movies} from './components/movies';
import {useState} from 'react';

//console.log(movies);
function App() {
const [movieList,setmovieList]=useState(movies)
console.log(movieList);
  return (

    <div className="App">
      <NavBar/>
      <div className="disp">
      <Filter/>
      </div>
      <Add/> 
      <div classeName="displ">
      <MovieList movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
