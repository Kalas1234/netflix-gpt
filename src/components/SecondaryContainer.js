import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    console.log('check41', movies);
    if (
        movies.nowPlayingMovies === null ||
        movies.topRatedMovies === null ||
        movies.upcomingMovies === null ||
        movies.popularMovies === null
    )
        return; //early return
    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20 pl-12">
                <MoviesList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
                <MoviesList title={'Top Rated'} movies={movies?.topRatedMovies} />
                <MoviesList title={'Upcoming'} movies={movies?.upcomingMovies} />
                <MoviesList title={'Popular'} movies={movies?.popularMovies} />
                <MoviesList title={'Thriller'} movies={movies?.nowPlayingMovies} />
                <MoviesList title={'Comedy'} movies={movies?.nowPlayingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
