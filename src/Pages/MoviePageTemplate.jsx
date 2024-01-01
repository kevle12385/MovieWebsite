import React, {useEffect} from 'react'
import Navbar from '../Component/Navbar'
import axios from 'axios';
import './MoviePageTemplate.css'

function MoviePageTemplate({ clickedMovie, movieData, setMovieData }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';


useEffect(() => {
  const fetchMovieDetails = () => {
    if (clickedMovie) {
      axios.get(`https://api.themoviedb.org/3/movie/${clickedMovie}`, {
        params: {
          api_key: '97160fa9e6bed82f9eb05e18682f0db8'
        }
      })
      .then(response => {
        console.log(response.data); // Handle your response here
        setMovieData(response.data); // Update the state with movie data
      })
      .catch(error => {
        console.error(error); // Handle the error here
      });
    }
  };

  fetchMovieDetails(); // Call the function with clickedMovie ID
}, [clickedMovie]); // Corrected dependency array with clickedMovie
  


  return (
    <> 


    {movieData ? (
      <>

      
          <div className='container'
            style={{
              backgroundImage: `url(${baseUrl}${movieData.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
             
              // other styles as needed
            }}> 
          
      
          <div className='textInfo'>
            <h1 className='MovieName'>{movieData.title}</h1>
            <div className='MovieDetails'>
            <div className='LeftColumn'>
            <h1 className='plot' >Movie Description:</h1>
            <div className='MovieOverView'>{movieData.overview}</div>
            <div className='Genre'>Genre:</div>
            <div className='genreContainer'>
                {movieData.genres.map(genre => (
                    <div className='Searchedmovie-Item' key={genre.id}>
                        <div className='eachGenre'>{genre.name}</div>
                    </div>
                ))}
            </div>
            <div className='runtime'>Runtime: {movieData.runtime} minutes - </div>
          <div className='Budget'> Budget: {movieData.budget}$</div>
        
        </div>
        <div className='RightColumn'>
            <img className="MoviePoster" src={`${baseUrl}${movieData.poster_path}`} alt={`${movieData.title} Poster`} />
        </div>
    </div>
</div>


         </div>
        

       
        
        
    
      </>
    ) : (
      <p>Loading movie data...</p> // Or any other placeholder content
    )}

      
  </>


    
  )
}

export default MoviePageTemplate