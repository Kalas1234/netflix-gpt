import { configureStore } from '@reduxjs/toolkit';
import userReducer from  './slice/userslice'

const appStore = configureStore({
    reducer: {
        user : userReducer
    }
});

export default appStore;
