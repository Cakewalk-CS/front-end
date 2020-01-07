import React, {useState} from "react";
import { Link, Route } from 'react-router-dom';
import axios from 'axios'

const Login = props => {
  const [user, setUser] = useState({
      "username": '',
      "password": ''
  })
  console.log(user)

  const handleChange = e => {
    setUser({
      ...user,
        [e.target.name]: e.target.value
    });
  };

    const login = (e) => {
        e.preventDefault()
        axios.post("https://text-adv-game.herokuapp.com/api/login/", user)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.key);
            })
            .catch(err => console.log(err));
    }
    
  return (
    <>
        <div className = 'loginFormDiv'>
            <form className='loginForm' onSubmit={login}>
            <label>
                Username
                <input
                type="text"
                name="username"
                value={user.username}
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
    </>
  );
};

export default Login;