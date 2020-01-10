import React, {useState} from "react";
import axios from 'axios'
import Modal from './GameStartModal'
import styled from 'styled-components'
import ori from "../SVG/ori.svg"
import title from "../SVG/title.svg"
const ParentDiv = styled.div `
display: flex;
justify-content: center;
text-align: center;
height: 100vh;
`
const LoginFormDiv = styled.div `
display: flex;
background-color: #f26419;
width: 50% ;
flex-grow: 1;
justify-content: center;
flex-direction: column;
color: white;
font-family: 'Exo 2', sans-serif;
`
const WBSpan = styled.span`
font-size: 40px;
font-weight:bold;
margin-bottom: 40px;
`
const Form = styled.form `
margin-top: 100px;
margin-bottom: 100px;
width: 60%;
margin: 0 auto;
position: relative;
`;
const UsrLabel = styled.label `
font-family: 'Exo 2', sans-serif;
font-weight:bold;
font-size:20px;
color: white;
`
const PwLDiv = styled.div `
margin-top: 25px;
`
const PwLabel = styled.label `
font-family: 'Exo 2', sans-serif;
font-weight:bold;
font-size:20px;
`
const Input =styled.input `
font-size: 20px;
margin: 6px;
border: none;
`
const LButton = styled.button `
border-radius: 20px;
border-color: transparent;
background-color: #efb22d;
cursor: pointer;
width: 80%
margin: 0 auto;
margin-top:25px;
font-family: 'Exo 2', sans-serif;
font-weight:bold;
font-size:20px;
height:40px;
&:hover{
  background: #33658a;
}
`
const LogoDiv = styled.div `
background-color: #55dde0;
width: 50% ;
flex-grow: 1;
`
const ForgotDiv = styled.span `
font-style: italic;
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
                  props.history.push('/rooms')
                }
            })
            .catch(err => console.log(err));
    }
  return (
  <ParentDiv>
    <LogoDiv>
    <img style={{marginTop:"30px", marginRight:"15px"}} src={title} alt="title" />
    <img style={{width:"90%"}} src={ori} alt="Ori" />
    </LogoDiv>
    <Modal success={success} setSuccess={setSuccess}/>
        <LoginFormDiv>
        <WBSpan>WELCOME BACK!</WBSpan>
          {/* <LoginForm> */}
          <Form onSubmit={login}>
            <UsrLabel>
                USERNAME
                <Input
                style={{top: "554px", left: "16px", width: "100%", height: "40px", borderRadius: "20px", borderColor: "#f26419"}}
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                />
            </UsrLabel>  
            <PwLDiv>
              <PwLabel>
                  PASSWORD
                  <Input
                  style={{top: "554px", left: "16px", width: "100%", height: "40px", borderRadius: "20px", borderColor: "#f26419"}}
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  />
              </PwLabel>
            </PwLDiv>
            <ForgotDiv>Forgot your password?</ForgotDiv>
            <LButton className='loginButton' type='submit'>SIGN IN</LButton>
          </Form>
          {/* </LoginForm> */}
        <div className='loginLine'></div>
      </LoginFormDiv>
  </ParentDiv>
  );
};
export default Login;