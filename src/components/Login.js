import { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignUpForm = () => {
        setSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg"
                    alt="logo"
                />
            </div>
            <form className="absolute right-0 left-0 mx-auto my-60 w-3/12 p-12 bg-black text-white rounded-lg bg-opacity-80">
                <h1 className='font-bold text-white text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'} </h1>

                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700" />}
                <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
                <input type="password" placeholder="password" className="p-2 my-4 w-full bg-gray-700" />

                <button className="p-4 my-6 w-full cursor-pointer bg-red-700 rounded-lg">Sign In</button>
                <p className='py-4' onClick={toggleSignUpForm}>{isSignInForm ? 'New to Netflix? Sign Up Now!' : 'Already Registered? Sign in Now!'} </p>
            </form>
        </div>
    );
};

export default Login;
