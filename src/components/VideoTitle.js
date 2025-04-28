import React from 'react';


const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-12 absolute text-white w-screen aspect-video'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className= "py-6 text-lg w-1/2">{overview}</p>

            <div>
           <button className='px-24 p-4 text-lg text-black bg-white rounded-lg hover:bg-opacity-80'> ◀️ play</button>
           <button className='bg-gray-500 px-12 p-4 text-lg text-white rounded-lg mx-4 bg-opacity-50'>More Info</button>
            </div>
        </div>

    );
};
 
export default VideoTitle;