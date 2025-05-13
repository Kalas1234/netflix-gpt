import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../redux/slice/moviesSlice';

const useMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies)
    const getMoviesList = async () => {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json?.results));
    };
    useEffect(() => {
       !nowPlayingMovies && getMoviesList(); //Memoization
        // eslint-disable-next-line 
    }, []);
};

export default useMovies;
