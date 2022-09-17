import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import "./MovieList.scss";

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    let renderMovies = "";

    renderMovies = movies.Response === "True" ? (
        movies?.Search?.map((movie, index) => (
            <MovieCard key={ index } data={ movie } />
        ))
    ) : (<div className="movies-error"><h3>{ movies.Error
    }</h3></div >
    )
    console.log(movies);
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{ renderMovies }</div>
            </div>
        </div>
    )
}

export default MovieList