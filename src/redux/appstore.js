import { configureStore } from '@reduxjs/toolkit';
import userReducer from  './slice/userslice'
import movieReducer from './slice/moviesSlice'
import gptReducer from './slice/gptSlice'
import configReducer from './slice/configSlice'

const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        config: configReducer
    }
});

export default appStore;
