import React from 'react'
import './LoadMore.css'



function LoadMore({ pageNumber, setPageNumber}) {


  const handleClick = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
    console.log(pageNumber)
  };
  return (
    <>
    <div className='buttonContainer'>

      <button className="LoadMoreButton" onClick={handleClick}>Load More</button>
      
    </div>
   </>

  )
}

export default LoadMore