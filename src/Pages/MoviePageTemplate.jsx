import React from 'react'
import Navbar from '../Component/Navbar'
import axios from 'axios';
function MoviePageTemplate({homeClicked}) {

  

  // const options = {
  //   method: 'GET',
  //   url: 'https://api.themoviedb.org/3/find/external_id',
  //   params: {external_source: ''},
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzE2MGZhOWU2YmVkODJmOWViMDVlMTg2ODJmMGRiOCIsInN1YiI6IjY1OGU0NDczNjRmNzE2MjFiYzNmNmVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JAz78CNIODvu_h_lLRZoXDuF-Kx3akqSfWG2nYi5ues'
  //   }
  // };
  
  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });



  return (
    <> 
    <div>
        <Navbar homeClicked={homeClicked} /> 
    </div>

    <h1>Movie Name</h1>
    <h1>movie image</h1>
    <h1>movie description</h1>





    </>
  )
}

export default MoviePageTemplate