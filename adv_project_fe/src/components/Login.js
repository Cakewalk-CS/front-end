import React, {useState} from "react";
import axios from 'axios'
import Modal from './GameStartModal'
import styled from 'styled-components'

const ParentDiv = styled.div `
display: flex;


`

const LoginFormDiv = styled.div `
display: flex;
background-color: #1c2630;
width: 50% ;
`

const LoginForm = styled.div `

`

const LogoDiv = styled.div `
background-color: #55dde0;
width: 50% ;
height: 800px;
`


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
  <ParentDiv>
    <LogoDiv>

    </LogoDiv>
    <Modal success={success} setSuccess={setSuccess}/>
        <LoginFormDiv>
          <LoginForm>
          <form onSubmit={login}>
            <label>
                Username
                <input
                style={{top: "554px", left: "16px", width: "50%", height: "40px", borderRadius: "6px", borderColor: "#f26419"}}
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                />
            </label>  
            <label>
                Password
                <input
                style={{top: "554px", left: "16px", width: "50%", height: "40px", borderRadius: "6px", borderColor: "#f26419"}}
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                />
            </label>
            <a>Forgot your password?</a>
            <button className='loginButton' type='submit'>Sign in</button>
          </form>
          </LoginForm>
        <div className='loginLine'></div>
      </LoginFormDiv>
  </ParentDiv>
  );
};

export default Login;