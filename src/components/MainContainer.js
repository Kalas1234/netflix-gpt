import React from 'react';

import { useSelector } from 'react-redux';
import VideoTitlle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainContainer = () => {
    const movies = useSelector((store) => store.movies.nowPlayingMovies);

    if (movies === null) return;  // this is also called as early return
    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;
    console.log('check34',id)
    console.log('check12', mainMovie);
    return (
        <div>
            <VideoTitlle title={original_title} overview={overview}  />
            <VideoBackground movieId = {id} />
        </div>
    );
};

export default MainContainer;
