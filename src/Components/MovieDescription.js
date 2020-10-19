import React from 'react';

//components

import MovieInfo from './Description/MovieInfo';

import {useMovieFetch} from './Hooks/useMovieFetch';
const MovieDescription =({movieId})=>{
    const [{movie,loading, error}]=useMovieFetch(movieId);
    console.log("Movies",movie);
    if (error) return <div>Not found...</div>
    if(loading) return <div>Loading...</div>
    return(
        <div>
            <MovieInfo/>
        </div>
    )
}
export default MovieDescription;