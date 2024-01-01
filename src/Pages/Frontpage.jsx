import React, {useState} from 'react'
import Navbar from '../Component/Navbar'

import PopularMovies from '../Component/PopularMovies'
import LoadMore from '../Component/LoadMore'


function Frontpage({handleClick, homeClicked, pageNumber, setPageNumber}) {


// the goal is to extract the
  

  return (
    <div className='frontPage'>
     
       <PopularMovies handleClick={handleClick}
        homeClicked={homeClicked}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
       />
      {/* <LoadMore  
      pageNumber={pageNumber}
      setPageNumber={setPageNumber} /> */}

    </div>
  )
}

export default Frontpage