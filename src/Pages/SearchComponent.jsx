import React,  {useState, useEffect} from 'react'
import axios from 'axios';
import Navbar from '../Component/Navbar';
import '../Component/PopularMovies.css'
import './SearchComponent.css'
import LoadMore from '../Component/LoadMore';



function SearchComponent({homeClicked, input, setInput, pageNumber, setPageNumber, movieData, setMovieData, handleClick}) {
const [searchedMovies, setSearchedMovies] = useState([])


const apiKey = '97160fa9e6bed82f9eb05e18682f0db8'
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzE2MGZhOWU2YmVkODJmOWViMDVlMTg2ODJmMGRiOCIsInN1YiI6IjY1OGU0NDczNjRmNzE2MjFiYzNmNmVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JAz78CNIODvu_h_lLRZoXDuF-Kx3akqSfWG2nYi5ues'

const baseUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
  
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {query: input, include_adult: 'false', language: 'en-US', page:  `${pageNumber}`},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzE2MGZhOWU2YmVkODJmOWViMDVlMTg2ODJmMGRiOCIsInN1YiI6IjY1OGU0NDczNjRmNzE2MjFiYzNmNmVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JAz78CNIODvu_h_lLRZoXDuF-Kx3akqSfWG2nYi5ues'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSearchedMovies(prevMovies => pageNumber === 1 ? response.data.results : [...prevMovies, ...response.data.results]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [input, pageNumber]); // Dependency array with input



  return (
    <div >
       
        <h1 className='SearchResults' onClick={() =>console.log(movieData)}> Search Results</h1>

        
      <div className='grid-container'>
       { searchedMovies.map(searchedMovies => (
           <div key={searchedMovies.id} className='movie-Item'
                 onClick={() =>handleClick(searchedMovies.id)}>

    
               <img src={`${baseUrl}${searchedMovies.poster_path}`} alt={`${searchedMovies.title} Poster`} 
               className='PopularimagePosters'/>

           <div className='PopularimageTitles' >{searchedMovies.title} </div>

            
    
    



           </div>

        ))}
        

      </div>

          <LoadMore pageNumber={pageNumber} setPageNumber={setPageNumber}/>


    </div>
  )
} 

export default SearchComponent