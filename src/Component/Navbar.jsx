import React, {useState}from 'react'
import './Navbar.css'

function Navbar({homeClicked, pageNumber, setPageNumber, setInput, input}) {


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented")
  }

  const onChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value)
  }



  return (

   <>
    
   <div className='navbar' >
    <div className='websiteName' onClick={() =>homeClicked()}>Rev Movie </div>
    <div className="homeButton"onClick={() =>homeClicked()}>Home</div>
    <form className='searchBar' onSubmit={onSubmit}>

      <input 
      className="searchInput"
      type='text' 
      placeholder=' Search Movies'
      onChange={onChange}
      value={input}
      />
    </form>
    
    
    </div>
    

    
    


    </>
  )
}

export default Navbar