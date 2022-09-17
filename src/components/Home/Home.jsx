import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import movieApi from '../../common/movieApi'
import { APIKey } from '../../common/MovieApiKey'
import { addMovies } from '../../features/movies/movieSlice'
import MovieList from '../MovieList/MovieList'

const Home = () => {
    const movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log("Err :", err)
                });
            dispatch(addMovies(response.data))
            // console.log(response)
        }
        fetchMovies();
    }, [])
    return (
        <>
            <div className='banner-img'>Banner Image</div>
            <MovieList />
        </>
    )
}

export default Home