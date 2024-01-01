import React from 'react'
import Navbar from '../Component/Navbar'
import './Frontpage.css'
import PopularMovies from '../Component/PopularMovies'


function Frontpage({handleClick, homeClicked}) {


// the goal is to extract the
  

  return (
    <div className='frontPage'>
      <Navbar homeClicked={homeClicked} />
       <PopularMovies handleClick={handleClick} homeClicked={homeClicked}/>
    </div>
  )
}

export default Frontpage