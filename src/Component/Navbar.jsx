import React from 'react'
import './Navbar.css'

function Navbar({homeClicked}) {
  return (

   <>
   <div className='navbar' >
    <div className='websiteName' onClick={() =>homeClicked()}>Rev Movie </div>
    <form className='searchBar'>
      <input 
      className="searchInput"
      type='text' 
      placeholder='Search Movies '/>
      <button className='searchButton'type='submit'>Search</button>

    </form>
   
    </div>


    


    </>
  )
}

export default Navbar