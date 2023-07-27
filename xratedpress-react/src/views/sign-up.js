import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-Up - XratedPress</title>
        <meta property="og:title" content="Sign-Up - XratedPress" />
      </Helmet>
      <span className="sign-up-xrated-press">XRATED PRESS</span>
      <span className="sign-up-text">Already have an Account?</span>
      <form
        id="regform"
        name="regform"
        method="post"
        target="blank"
        enctype="multipart/form-data"
        autoComplete="on"
        className="sign-up-form"
      >
        <span className="sign-up-first-name">First Name:</span>
        <span className="sign-up-email">Email:</span>
        <span className="sign-up-password">Password:</span>
        <span className="sign-up-last-name">Last Name:</span>
        <input
          type="text"
          id="lname"
          name="lname"
          required
          placeholder="Alexis"
          autoComplete="family-name"
          className="sign-up-last-name1 input"
        />
        <input
          type="password"
          id="pass"
          name="pass"
          required
          placeholder="*******"
          autoComplete="on"
          className="sign-up-password1 input"
        />
        <input
          type="text"
          id="fname"
          name="fname"
          required
          placeholder="John"
          autoComplete="given-name"
          className="sign-up-first-name1 input"
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="johnalexis@gmail.com"
          autoComplete="on"
          className="sign-up-email1 input"
        />
        <Link to="/home-for-user" className="sign-up-navlink button">
          <span className="sign-up-text01">
            <span className="sign-up-text02">Sign Up</span>
            <br className="sign-up-text03"></br>
          </span>
        </Link>
      </form>
      <Link to="/sign-up" className="sign-up-navlink1 button">
        <span className="sign-up-text04">
          <span className="sign-up-text05">Login</span>
          <br></br>
        </span>
      </Link>
      <Link to="/" className="sign-up-navlink2 button">
        <span className="sign-up-text07">
          <span className="sign-up-text08">&lt;- Back</span>
          <br className="sign-up-text09"></br>
        </span>
      </Link>
    </div>
  )
}

export default SignUp
