import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/slice/userslice';
import { LOGO_URL } from '../utils/constants';
import { toggleGptSearchView } from '../redux/slice/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../redux/slice/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store?.user?.user || {});
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        console.log('check8');
        signOut(auth)
            .then(() => {
                console.log('check6', auth);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleGptSearch = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChnage = (e) => {
        console.log(e);
        dispatch(changeLanguage(e.target.value));
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
                        photoURL: photoURL
                    })
                );
                navigate('/browse');
            } else {
                // User is signed out
                // console.log(user);
                dispatch(removeUser);
                // console.log(user);
                navigate('/');
            }
        });

        // Unsubscribe when component unmounts--
        return () => unsubscribe();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="absolute w-screen bg-gradient-to-b z-10 from-black px-8 py-2 flex justify-between">
            <img src={LOGO_URL} alt="logo" className="w-60" />

            {user && (
                <div className="flex p-2 gap-2">
                    {showGptSearch && (
                        <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChnage}>
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option value={lang.identifier} key={lang.identifier}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}

                    <button
                        className="w-[130px] h-[55px] rounded-lg mx-4 my-2  bg-purple-800 text-white"
                        onClick={handleGptSearch}>
                       {showGptSearch ? 'Home Page' : 'Gpt Search'}
                    </button>
                    <img alt="logo" src={user?.photoURL} className="w-12 h-12 mt-4" />
                    <button onClick={handleSignOut} className="font-bold text-white">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
