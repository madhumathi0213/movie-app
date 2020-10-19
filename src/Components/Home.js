import React, { useState } from 'react';
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from '../config';

//Components

import Header from './HeaderSection/Header';
import Image from './ImageSection/Image';
import Grid from './BodySection/Grid/Grid';
import Movie from './BodySection/Movie/Movie';
import SingleMovie from './BodySection/SingleMovie/SingleMovie';

//Hook
import { useHomeFetch} from './Hooks/useHomeFetch';

const Home =(props)=>{
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

    // console.log('state',state);
    if (error) return <div>Something went wrong ...</div>;
    if (!movies[0]) return <div>loading...</div>;  
  return(
    <div>
          <Header></Header>
          <Image
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
        <Grid header={searchTerm ? 'Search Result' : 'All Movies'}>
        {movies.map(movie => (
          <Movie
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : "NoImage"
            }     
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
          <Grid></Grid>
          <Movie></Movie>
          <SingleMovie></SingleMovie>
      </div>
  
  )
  

}
    


export default Home;