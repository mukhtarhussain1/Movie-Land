import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";

import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';
import './Theme.css';

const API_URL = "http://www.omdbapi.com?apikey=c125fce0";

// const movie1 = {
//   "Title": "Superman",
//   "Poster": "N/A",
//   "imdbID": "tt2586634",
//   "Type": "Movie",
//   "Year": "2012"
// }

const App = () => {

  const [theme, setTheam] = useLocalStorage ('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheam(newTheme)
  }


  const [movies, setMovies] = useState([0]);
  const [searchTearm, setSearchTearm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    // console.log(data.search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('america');
  }, []);

  return (

    <div className = "app" data-theme={theme}>
      <Navbar/>
      <h2>Explore the World</h2>
      
      <div className='theme-toggle'>
        <i onClick={switchTheme} class='fas fa-toggle-on'></i>
      </div>

      <div className="search">
        <input
          value={searchTearm}
          placeholder="Search for movies"
          onChange={ (e) => setSearchTearm(e.target.value)}
        />
      <img
          src={SearchIcon}
          alt="search"
          onClick={ () => searchMovies(searchTearm)}
        />
      </div>

      <h3><a onClick={ () => searchMovies('love')} href='#'>Populer Downloads</a></h3>
      <div className='line'></div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map( (movie) => (
              <MovieCard movie={movie}/>
            ) )}
          </div>
        ) : (
          <div className='empty'>
            <h2>Movies not found</h2>
          </div>
        )
      }
     <Footer />
    </div>
  );
}

export default App;