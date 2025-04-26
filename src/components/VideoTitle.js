import React from 'react';


const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-36 px-12 '>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className= "py-6 text-lg w-1/2">{overview}</p>

            <div>
           <button className='bg-gray-500 px-12 p-4 text-lg text-white rounded-lg bg-opacity-50'> ◀️ play</button>
           <button className='bg-gray-500 px-12 p-4 text-lg text-white rounded-lg mx-4 bg-opacity-50'>more Info</button>
            </div>
        </div>

    );
};
 
export default VideoTitle;