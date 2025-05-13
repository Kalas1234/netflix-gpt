import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {

    if(!posterPath) return null;
    return <div className='min-w-48 pr-4'>
        <img  className = 'w-[200px] max-h-[300px]' alt='movie' src= {`${IMG_CDN_URL}/${posterPath}`} />
    </div>;
};

export default MovieCard;
