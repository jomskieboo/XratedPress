import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - XratedPress</title>
        <meta property="og:title" content="Login - XratedPress" />
      </Helmet>
      <span className="login-xrated-press">XRATED PRESS</span>
      <input
        type="email"
        required
        placeholder="johnalexis@gmail.com"
        autoComplete="on"
        className="login-email input"
      />
      <input
        type="password"
        required
        placeholder="*******"
        autoComplete="on"
        className="login-password input"
      />
      <span className="login-password1">Password:</span>
      <span className="login-email1">Email:</span>
      <span className="login-text">
        Don&apos;t have an account?
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <Link to="/sign-up" className="login-navlink button">
        <span className="login-text01">
          <span className="login-text02">Sign Up</span>
          <br></br>
        </span>
      </Link>
      <Link to="/home-for-user" className="login-navlink1 button">
        <span className="login-text04">
          <span className="login-text05">Login</span>
          <br className="login-text06"></br>
        </span>
      </Link>
      <Link to="/" className="login-navlink2 button">
        <span className="login-text07">
          <span className="login-text08">&lt;- Back</span>
          <br className="login-text09"></br>
        </span>
      </Link>
    </div>
  )
}

export default Login
