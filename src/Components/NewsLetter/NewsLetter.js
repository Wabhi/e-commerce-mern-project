import React from 'react'
import "./Newsletter.css"
const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe our newsletter and stay updated !</p>
        <div>
            <input type="email" placeholder="Enter Your Email Address" name="email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter