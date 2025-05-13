import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const GptMovieSuggestions = () => {
    const { moviesResult, moviesName } = useSelector((store) => store.gpt);

    if (!moviesName) return null;
    return (
        <div className="p-4 m-4 bg-black text-white  bg-opacity-50">
            <div>
                {moviesName.map((movie, index) => (
                    <MoviesList key={movie} title={movie} movies={moviesResult[index]} />
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestions;
