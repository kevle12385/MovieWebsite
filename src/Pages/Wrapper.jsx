import { useState } from 'react'
import Frontpage from './Frontpage';
import MoviePageTemplate from './MoviePageTemplate';
import SearchComponent from './SearchComponent';
import Navbar from '../Component/Navbar';


function Wrapper() {
  const [clickedMovie, setClickedMovie] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [input, setInput] = useState('')



const handleClick = (movieId) => {
        console.log(movieId);
        setClickedMovie([ movieId]);
        console.log("set to " + clickedMovie )
        setInput('')
    }

const homeClicked = () => {
  setClickedMovie(null);
  console.log("set to " + clickedMovie )
  setPageNumber(1);
  
}


return (
  <>
    <div>

      <Navbar homeClicked={homeClicked} input={input} setInput={setInput}/>
     { input === '' ? (
      clickedMovie === null ? 
        <Frontpage handleClick={handleClick} 
          homeClicked={homeClicked}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          input={input}
          setInput={setInput}
          movieData={movieData}
          setMovieData={setMovieData}
          />
         : 
        <MoviePageTemplate homeClicked={homeClicked} 
          clickedMovie={clickedMovie}  
          setClickedMovie={setClickedMovie}
          movieData={movieData} 
          setMovieData={setMovieData}
          input={input}
          setInput={setInput}
          />
      ) : 
        <SearchComponent 
           homeClicked={homeClicked}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
         input={input}
         setInput={setInput}
         movieData={movieData}
         setMovieData={setMovieData}
         handleClick={handleClick}
        />
      }
    </div>
  </>
);
    }

export default Wrapper