import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    console.log('check41',movies)
    if(movies === null) return;
    return (
        <div>
            <MoviesList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
            <MoviesList title={'Trending'} movies={movies?.nowPlayingMovies} />
            <MoviesList title={'Horror'} movies={movies?.nowPlayingMovies} />
            <MoviesList title={'Adventure'} movies={movies?.nowPlayingMovies} />
            <MoviesList title={'Thriller'} movies={movies?.nowPlayingMovies} />
            <MoviesList title={'Comedy'} movies={movies?.nowPlayingMovies} />
        </div>
    );
};

export default SecondaryContainer;
