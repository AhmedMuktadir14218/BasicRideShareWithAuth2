    //google auth segment
 

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';  
import auth from '../../firebase.init';
import './SocialLogin.css';
   const SocialLogin = () => {
        const navigate=useNavigate();
        const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
        let errorElement;
        if (error) {
            errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
        }
        if (user) {
            navigate('/')
        } 
        return (
            <div>
                {errorElement}
                <button  onClick={() => signInWithGoogle()}  className="googleBtn">
                    <img  src="https://i.ibb.co/R0cy8Yn/Group-571.png" alt=""/> Continue with Google
                </button>
            </div>
        );
    };
    
    export default SocialLogin;