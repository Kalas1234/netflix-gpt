import React from 'react';


const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-12 absolute text-white w-screen aspect-video'>
            <h1 className='text-2xl font-bold  md:text-6xl'>{title}</h1>
            <p className= "hidden  md:py-6 md:inline-block md:text-lg md:w-1/2 ">{overview}</p>

            <div className='py-3 md:m-0'>
           <button className='px-3 py-2 p-4 text-lg text-black bg-white rounded-lg hover:bg-opacity-80 md:px-24 md:py-3'> ◀️ play</button>
           <button className='hidden bg-gray-500 px-12 py-4 text-lg text-white rounded-lg mx-4 bg-opacity-50 md:inline-block'>More Info</button>
            </div>
        </div>

    );
};
 
export default VideoTitle;