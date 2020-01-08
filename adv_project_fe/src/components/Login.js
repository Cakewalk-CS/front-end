import React, {useState} from "react";
import axios from 'axios'
import Modal from './GameStartModal'

const Login = props => {
  const [user, setUser] = useState({
      "username": '',
      "password": ''
  })
  const [success, setSuccess] = useState(false)

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
                localStorage.setItem("token", res.data.key);
                if(res.status === 200){
                    setSuccess(true)
                }
            })
            .catch(err => console.log(err));
    }
    
  return (
    <>
    <Modal success={success} setSuccess={setSuccess}/>
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