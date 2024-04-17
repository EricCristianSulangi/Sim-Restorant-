import React from 'react'
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const LoginForm = () => {
  return (
   <div className="logi"> 
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="input-box">
            <input type="text" placeholder='Password' required />
            <FontAwesomeIcon icon={faLock} />          </div>
          <div className="remember-forgot">
            <label> <input type="checkbox" /> Remember me</label>
            <a href='#'>Forgot Password </a>
          </div>

          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have accoun? <a href='#'>Register</a></p>
          </div>
      </form>
    </div>
    </div>
    )
}

export default LoginForm