import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import NavberPractice from '../Header/NavberPractice/NavberPractice';
// import useAuth from '../../../Hooks/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';
import "./Login.css";
import SocialLogin from './SocialLogin';


const Login = () => {


    //Email Pass Auth segment
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    // const [error,setError]=useState('');

    const from =location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    // const handleError = event =>{
    //     setError(event.target.value);
    // }
    if (user) {
        navigate(from,{replace:true});
    }
    const handleUserSignIn =event =>{
        event.preventDefault();
        // if (password !== confirmPassword) {
        //     setError('Both Password did not match')
        //    return ;
        // }

        signInWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <NavberPractice></NavberPractice>
            <div>
            <div className="logInPage">
                <div className="boxInside">
                    <h4>Login</h4>
                <form onSubmit={handleUserSignIn} className="pt-4" >
                    <div className="form-group">
                            <input onBlur={handleEmailBlur} type="email" name="email" className="form-control input"placeholder="Email" required/>
                    </div>
                    <div className="form-group pass-wrapper">
                         <input onBlur={handlePasswordBlur} type= "password" name="password"className="form-control input mt-4"placeholder="Password" required/>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <div>
                            <input type="checkbox" id="RememberPassword" name="RememberPassword" value="RememberPassword"/>
                            <label style={{paddingLeft:"5px",fontWeight:"600"}} htmlFor="RememberPassword">Remember Me</label>
                        </div>
                        <p style={{color:'red'}}>{error?.message}</p>
                        {
                            loading && <p>Loadeing....</p>
                        }
                            <h6>Forgot Password</h6>
                        </div>
                        <button style={{backgroundColor:"#FF6E40"}} className="form-submit btn btn-block text-white mt-4 " type='submit'>Login</button>
                        <h6 className="text-center pt-2">Don't have an account?<Link style={{color:"#FF6E40"}} to="/signUn" >Create an account</Link></h6>
                </form>
                    </div>
                        <div className="text-center pt-3">
                            <SocialLogin></SocialLogin>
                         </div>
            </div>
        </div>
        </div>
        
       
      
    );
};

export default Login;