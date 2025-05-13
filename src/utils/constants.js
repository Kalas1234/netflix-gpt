export const PHOTO_URL =
    'https://avatars.githubusercontent.com/u/43087249?s=400&u=5a7c0d1c19b981421db5e4df78715c955a408a02&v=4';
export const LOGO_URL =
    'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
};
export const BG_URL =
    'https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500';

export const SUPPORTED_LANGUAGES = [
    {
        identifier: 'en',
        name: 'English'
    },
    {
        identifier: 'hindi',
        name: 'Hindi'
    },
    {
        identifier: 'spanish',
        name: 'Spanish'
    }
];

export const OPENAI_SECRET_KEY = process.env.REACT_APP_OPENAI_SECRET_KEY 