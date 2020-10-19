import React from 'react';
import { Link } from '@reach/router';
import './Movie.css';


const Movie =(props)=>(
    <div className="Movie">
        {/* <div>Movie</div> */}
    {props.clickable ? (
      <Link to={`/${props.movieId}`}>
        <img className="clickable" src={props.image} alt="movie" />
      </Link>
    ) : (
      <img src={props.image} alt="movie" />
    )}
  </div>
)

export default Movie;