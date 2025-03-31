import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    console.log('check12')
    const user  = useSelector((store) => store?.user?.user || {} );

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 flex justify-between">
            <img
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
                className="w-60"
            />

            {user && (
                <div className="flex p-2 gap-2">
                    <img
                        alt="https://occ-0-4209-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                        src={user?.photoURL}
                        className="w-12 h-12 mt-4"
                    />
                    <button onClick={handleSignOut} className="font-bold text-white">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
