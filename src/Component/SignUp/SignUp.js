
import './SignUp.css'
import NavberPractice from '../Header/NavberPractice/NavberPractice';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    // const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();

    
    const [ createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth);

    // const handleNameBlur = event =>{
    //     setName(event.target.value);
    // }
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    // const handleError = event =>{
    //     setError(event.target.value);
    // }
    if (user) {
        navigate('/')
    }
    const handleCreateUser =event =>{
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Both Password did not match')
           return ;
        }

        createUserWithEmailAndPassword(email,password)
    }


    return (
        <div>
            <NavberPractice></NavberPractice>
            <div className="SignInPage">
                <div className="boxInside">
                    <h4>Create an account</h4>
                    
                    <form onSubmit={handleCreateUser} className="pt-4" >
                        <div className="form-group">
                            <input type="text" name="name" className="form-control input" placeholder="Name"required/>            
                        </div>

                        <div className="form-group">
                            <input onBlur={handleEmailBlur} type="email" name="email" className="form-control input pt-4" placeholder="Username or Email" required />            
                        </div>
                        
                        <div className="form-group pass-wrapper">
                            <input onBlur={handlePasswordBlur} type="password" name="password" className="form-control input pt-4"placeholder="Password" required />            
                            {/* <i onClick={togglePasswordVisiblity}>{eye}</i> */}
                        </div>
                        
                        <div className="form-group pass-wrapper">
                            <input onBlur={handleConfirmPasswordBlur} type= "password" name="confirm_password" className="form-control input pt-4"placeholder="Confirm Password" required/>
                            {/* <i onClick={togglePasswordVisiblity}>{eye}</i> */}
                        </div>
                        
                        <p style={{color:'red'}}>{error}</p>
                        
                        <div className="form-group">
                        <button style={{backgroundColor:"#FF6E40"}} className="btn btn-block text-white mt-4" type="submit">Crate an account</button>
                        </div>
                        
                        <h6 className="text-center pt-2">Already have an account?<Link style={{color:"#FF6E40"}} to="/login" >Login</Link></h6>
                    </form>
                </div>
                        
            </div>
        </div>
    );
};

export default SignUp; 