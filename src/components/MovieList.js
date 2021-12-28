import React from 'react'
import MovieCard from './MovieCard';

function MovieList( {movieList} ) {
    return (
        <div classeName="movieList">
            {
                movieList.map( (el,key) => <MovieCard key={el.id} movie={el} /> )
            }
        </div>
    )
}

export default MovieList
