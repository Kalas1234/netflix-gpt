import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../redux/slice/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getMoviesList = async () => {
        const url = 'https://api.themoviedb.org/3/movie/upcoming?page=1';

        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results));
    };
    useEffect(() => {
        getMoviesList();
        // eslint-disable-next-line 
    }, []);
};

export default useUpcomingMovies;
