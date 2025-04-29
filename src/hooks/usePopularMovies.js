import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../redux/slice/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getMoviesList = async () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?page=1';

        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
    };
    useEffect(() => {
        getMoviesList();
        // eslint-disable-next-line 
    }, []);
};

export default usePopularMovies;
