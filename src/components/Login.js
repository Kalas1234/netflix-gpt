import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { checkValidate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../redux/slice/userslice';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignInForm, setSignInForm] = useState(true);
    const [userAvailable, setUserAvailable] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    const toggleSignUpForm = () => {
        setSignInForm(!isSignInForm);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
                setUserAvailable(true);
            } else {
                // User is signed out
                // console.log(user);
                dispatch(removeUser);
                // console.log(user);
                navigate("/");
                setUserAvailable(false);
            }
        });

        // Unsubscribe when component unmounts--
        return () => unsubscribe();
    }, [navigate, dispatch, userAvailable]);

    const handleButtonClick = () => {
        const message = checkValidate(emailRef.current.value, passwordRef.current.value);
        if (message) {
            setErrorMsg(message);
            return;
        }
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: nameRef.current.value,
                        photoURL:
                            'https://avatars.githubusercontent.com/u/43087249?s=400&u=5a7c0d1c19b981421db5e4df78715c955a408a02&v=4'
                    })
                        .then((res) => {
                            console.log('check6', res)
                            const { uid, email, displayName, photoURL } = auth?.currentUser
                            dispatch(
                                addUser({
                                    uid,
                                    displayName,
                                    photoURL,
                                    email
                                })
                            );

                            console.log('check11')

                            navigate('/browse');
                        })
                        .catch((error) => {
                            setErrorMsg(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + '-' + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate('/browse');
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + '-' + errorMessage);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    className="overflow-y-hidden"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg"
                    alt="logo"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute right-0 left-0 mx-auto my-60 w-3/12 p-12 bg-black text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-white text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'} </h1>

                {!isSignInForm && (
                    <input ref={nameRef} type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700" />
                )}
                <input ref={emailRef} type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="password"
                    className="p-2 my-4 w-full bg-gray-700"
                />
                <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>
                <button className="p-4 my-6 w-full cursor-pointer bg-red-700 rounded-lg" onClick={handleButtonClick}>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p className="py-4" onClick={toggleSignUpForm}>
                    {isSignInForm ? 'New to Netflix? Sign Up Now!' : 'Already Registered? Sign in Now!'}{' '}
                </p>
            </form>
        </div>
    );
};

export default Login;
