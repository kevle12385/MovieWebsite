import { useState } from 'react'
import Frontpage from './Frontpage';
import MoviePageTemplate from './MoviePageTemplate';


function Wrapper() {
  const [clickedMovie, setClickedMovie] = useState(null);

const handleClick = (movieId) => {
        console.log(movieId);
        setClickedMovie([clickedMovie, movieId]);
        console.log("set to " + clickedMovie )
    }

const homeClicked = () => {
  setClickedMovie(null);
  console.log("set to " + clickedMovie )
  
}


return (
  <>
    <div>
      {clickedMovie === null ? 
        (<Frontpage handleClick={handleClick} homeClicked={homeClicked} />) :
        (<MoviePageTemplate homeClicked={homeClicked}  />)
      }
    </div>
  </>
);
    }

export default Wrapper