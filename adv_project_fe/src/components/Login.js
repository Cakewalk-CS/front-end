import React, {useState} from "react";
import { Link, Route } from 'react-router-dom';
import axios from 'axios'

const Login = props => {
  const [user, setUser] = useState({
      email: '',
      password: ''
  })

  const handleChange = e => {
    setUser({
      ...user,
        [e.target.name]: e.target.value
    });
  };

    const login = (e) => {
        e.preventDefault()
        axios.post("?", user)
            .then(res => {
                props.history.push("/?");
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => console.log(err));
    }
    
  return (
    <div className = 'loginFormDiv'>
        <form className='loginForm' onSubmit={login}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>  
          <label>
            Password
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </label>
          <a>Forgot your password?</a>
          <button className='loginButton' type='submit'>Sign in</button>
        </form>
        <div className='loginLine'></div>
    </div>
  );
};

export default Login;