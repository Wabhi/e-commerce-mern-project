import React from 'react'
import "../Pages/CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className="login-sign-up">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-input-fields">
          <input type="text" placeholder="Enter your name" />
          <input type='email' placeholder="Enter your email address" />
          <input type="password" placeholder="Enter your password" />
        </div>
        <button>Continue</button>
        <p className="login-signup-already">Already have an account ? <span>Please login here</span></p>
        <div className="login-signup-agree">
          <input type='checkbox' name='' id='' value=''/>
          <p>By continuing, I agree to the terms of use and privacy policy </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup