import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../redux/slice/moviesSlice';

const useTopRatedMovies = () => {
    const topRatedMovies  = useSelector((store)=> store.movies.topRatedMovies)
    const dispatch = useDispatch();
    const getMoviesList = async () => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?page=1';

        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results));
    };
    useEffect(() => {
      !topRatedMovies && getMoviesList(); //Memoization
        // eslint-disable-next-line 
    }, []);
};

export default useTopRatedMovies;
