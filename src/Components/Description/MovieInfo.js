import React from 'react';
import Header from '../HeaderSection/Header';

import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import Movie from '../BodySection/Movie/Movie';


const MovieInfo =(props) =>(
    <div>
        {/* <h1>Movie Info</h1> */}
        <div>
            <div>
                <Header></Header>
                <Movie
                        image={`${IMAGE_BASE_URL}${POSTER_SIZE}$movie.poster_path`}
                    clickable={false}
                />
            </div>
            <div>
                <h1>{props.title}</h1>
                <h2>ABOUT</h2>
                <p>{props.overview}</p>
            </div>
        </div>

    </div>

)

export default MovieInfo;