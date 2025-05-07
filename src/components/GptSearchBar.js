import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/language';

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);
    console.log('check2',langKey)
    return (
        <div className="pt-[10%] flex justify-center m-4">
            <form className="bg-black w-1/2 grid grid-cols-12 " >
                <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey]?.gptSearchPlaceholder} />

                <button className="py-2 px-4 h-[50px] mt-[20px] bg-red-900 text-white rounded-lg col-span-3">{lang[langKey].search}</button>
            </form>
        </div>
    );
};

export default GptSearchBar;
