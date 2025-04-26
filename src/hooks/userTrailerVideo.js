import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../redux/slice/moviesSlice';

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filteredData = json?.results.filter((video) => video.type === 'Trailer');

        const trailer = filteredData.length ? filteredData[0] : json?.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getVideo();
        // eslint-disable-next-line
    }, []);

}
export default useTrailerVideo;
