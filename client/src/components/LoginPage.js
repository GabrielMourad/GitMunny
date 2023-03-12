import React, {useState } from 'react';
import {auth, provider} from '../firebase/Firebase';
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const LoginPage = ({setIsAuth}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to handle form submission here
  }
  
  const googleSignIn =  () =>{
    signInWithPopup(auth, provider).then((result) => {
        setIsAuth(true)
        localStorage.setItem("isAuth", true)
        navigate('/');
    }).catch((err) => {
        console.log(err)
    });;
  };

  
  

  return (
    <div class="container-login">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="login-form">
                <h2>Login</h2>

                <button onClick={googleSignIn} type="button" class="mb-3 login-with-google-btn" >
                    Sign in with Google
                </button>

                <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary-login">Login</button>
                </form>
                <div class="signup-section">
                    <p>Don't have an account yet? <a href="/signup">Sign Up</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default LoginPage;
