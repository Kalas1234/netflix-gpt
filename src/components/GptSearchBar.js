import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import lang from '../utils/language';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import Loader from '../common/Loader';
import { addGptMoviesResult } from '../redux/slice/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const [errorMsg, setShowErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const searchText = useRef(null);
    const langKey = useSelector((store) => store.config.lang);
    const handleGPTSearchClick = async () => {
        const gptQuery =
            'Act as a Movie Recommendation system and suggest some movies for the query : ' +
            searchText.current.value +
            '. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';
        setIsLoading(true);
        const gptResults = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            store: true,
            messages: [{ role: 'user', content: gptQuery }]
        });

        if (!gptResults.choices) {
            setShowErrorMsg('Error please try again!');
            return;
        }

        setShowErrorMsg('');

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

        const promiseArr = gptMovies.map((movie) => searchTmdbMovies(movie));

        const tmdbMovieResults = await Promise.all(promiseArr);

        dispatch(addGptMoviesResult({ moviesResult: tmdbMovieResults, moviesName: gptMovies }));

        setIsLoading(false);
    };

    const searchTmdbMovies = async (movie) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;

        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        return json?.results;
    };
    return (
        <>
            <div className="pt-[10%] flex justify-center m-4">
                <form className="bg-black w-1/2 grid grid-cols-12 " onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={searchText}
                        type="text"
                        className="p-4 m-4 col-span-9"
                        placeholder={lang[langKey]?.gptSearchPlaceholder}
                    />

                    <button
                        className="py-2 px-4 h-[50px] mt-[20px] bg-red-900 text-white rounded-lg col-span-3"
                        onClick={handleGPTSearchClick}>
                        {lang[langKey].search}
                    </button>
                </form>
            </div>
            {isLoading && <Loader />}
            <p className="text-white font-bold text-lg py-2 text-center">{errorMsg}</p>
        </>
    );
};

export default GptSearchBar;
