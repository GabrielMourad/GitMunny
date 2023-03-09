import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to handle form submission here
  }

  return (
    <div class="container-login">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="login-form">
                    <h2>Login</h2>
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
                </div>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;
