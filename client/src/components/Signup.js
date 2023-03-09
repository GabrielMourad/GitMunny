import React from 'react'

export default function Signup() {
  return (
    <div class="container-signup">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="signup-form">
                    <h2>Sign Up</h2>
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Choose a password"/>
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" class="form-control" id="confirm-password" placeholder="Confirm your password"/>
                        </div>
                        <button type="submit" class="btn btn-signup">Sign Up</button>
                    </form>
                    <div class="signup-sectiong">
                        <p>Already have an account? <a href="/login">Log In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
