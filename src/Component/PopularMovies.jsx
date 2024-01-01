import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './PopularMovies.css'
import LoadMore from './LoadMore'
function PopularMovies({handleClick, homeClicked, pageNumber, setPageNumber}) {

    const apiKey = '97160fa9e6bed82f9eb05e18682f0db8'
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzE2MGZhOWU2YmVkODJmOWViMDVlMTg2ODJmMGRiOCIsInN1YiI6IjY1OGU0NDczNjRmNzE2MjFiYzNmNmVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JAz78CNIODvu_h_lLRZoXDuF-Kx3akqSfWG2nYi5ues'
const [movies, setMovies] = useState([]);
const baseUrl = 'https://image.tmdb.org/t/p/original/';


useEffect(() => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: { language: 'en-US', page: `${pageNumber}` },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };

  axios.request(options)
    .then(function (response) {
      console.log(response.data);
      
      setMovies(prevMovies => pageNumber === 1 ? response.data.results : [...prevMovies, ...response.data.results]);
    })
    .catch(function (error) {
      console.error(error);
    });
}, [pageNumber]); // Dependency array with pageNumber



    


  
  return (
    <>
   <div className='LargeDisplayContainer'>{movies.length > 0 ? 
   <>
 
   <img className='LargePictureDiplay' src={`${baseUrl}${movies[0].backdrop_path}`} alt={`${movies[0].title} Poster`} />
    <div className='LargeTextDisplayContainer'>
    <div className='LargeOverview'>{movies[0].overview}</div> 
    <div className='LargePictureTitleDiplay'>{movies[0].title}</div>
    </div>
    </>

   : 'No movies available'}
   
     <div className='popularmovietitlecontainer'>
       <div className='popularMovieTitle'>
          Popular Movies
       </div>

     </div>
   </div>

   
  
    <div className='grid-container' >
    
      {movies.map(movie => (
      <div key={movie.id} className='movie-Item' 
      onClick={() =>handleClick(movie.id)} >

        <img src={`${baseUrl}${movie.poster_path}`} alt={`${movie.title} Poster`} 
            className='PopularimagePosters'
           
             />
            
        <div className='PopularimageTitles' >{movie.title}</div>
        </div>
     )) }

    </div>

    <LoadMore pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </>
  )
      
}


export default PopularMovies