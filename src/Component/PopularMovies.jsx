import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './PopularMovies.css'
function PopularMovies({handleClick, homeClicked}) {

    const apiKey = '97160fa9e6bed82f9eb05e18682f0db8'
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzE2MGZhOWU2YmVkODJmOWViMDVlMTg2ODJmMGRiOCIsInN1YiI6IjY1OGU0NDczNjRmNzE2MjFiYzNmNmVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JAz78CNIODvu_h_lLRZoXDuF-Kx3akqSfWG2nYi5ues'
const [movies, setMovies] = useState([]);
const baseUrl = 'https://image.tmdb.org/t/p/w300';



useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    axios.request(options)
      .then(function (response) {
        console.log(response.data);
        setMovies(response.data.results); // assuming the API returns an object with a `results` array
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []); // Empty dependency 



    


    

  return (
    <>
    <div className='popularMovieTitle'>Popular Movies</div>

    <div className='grid-container' >
    
      {movies.map(movie => (
      <div key={movie.id} className='movie-Item' 
      onClick={() =>handleClick(movie.id)} 
      
      >
        <img src={`${baseUrl}${movie.poster_path}`} alt={`${movie.title} Poster`} 
            className='PopularimagePosters'
           
             />
        <div className='PopularimageTitles' >{movie.title} </div>
        </div>
     )) }

    </div>
    </>
  )
      
}


export default PopularMovies