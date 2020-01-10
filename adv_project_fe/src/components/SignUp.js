import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ori from "../SVG/ori.svg"
import signuptitle from "../SVG/signuptitle.svg"

const Signup = props => {
  //state
  const [newUser, setNewUser] = useState({ username: "", password1: "", password2: "" });
  const [error, setError] = useState({
    passwordLength: false,
    passwordMatch: false
  })

  const submitInfo = (event) => {
    event.preventDefault();
    if (newUser.password1.length < 8 || newUser.password2.length < 8) {
      setError({ ...error, passwordMatch: false, passwordLength: true })
      return
    }
    if (newUser.password1 !== newUser.password2) {
      setError({ ...error, passwordLength: false, passwordMatch: true })
      return;
    }
    axios.post("https://text-adv-game.herokuapp.com/api/registration/", newUser)
      .then(res => {
        localStorage.setItem("token", res.data.key);
        setError({ ...error, passwordLength: false, passwordMatch: false })
        props.history.push("/rooms");
      })
      .catch(err => console.log(err));
  }


  const handleNewUser = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <ParentDiv>
      <LogoDiv>
        <img style={{marginTop:"30px", marginRight:"15px"}} src={signuptitle} alt="signuptitle" />
        <Img style={{maxWidth:"50%"}} src={ori} alt="Ori" />
      </LogoDiv>
      <SignUpDiv>
        <Form onSubmit={e => submitInfo(e, newUser)}>
          <WBSpan>SIGN UP!</WBSpan>
          <PwLDiv>
          <PwLabel>USERNAME</PwLabel>
          <Input
            style={{top: "554px", left: "16px", width: "100%", height: "40px", borderRadius: "20px", borderColor: "#f26419"}}
            type="text"
            value={newUser.username}
            name="username"
            onChange={handleNewUser}
          />
          </PwLDiv>
          <PwLDiv>
          <PwLabel>PASSWORD</PwLabel>
          {error.passwordLength ? <p>Password should be at least 8 character long</p> : null}
          {error.passwordMatch ? <p>Passwords should match!</p> : null}
          <Input
            style={{top: "554px", left: "16px", width: "100%", height: "40px", borderRadius: "20px", borderColor: "#f26419"}}
            type="password"
            value={newUser.password1}
            name="password1"
            onChange={handleNewUser}
          />
          </PwLDiv>
          <PwLDiv>
          <PwLabel>RETYPE PASSWORD</PwLabel>
          <Input
            style={{top: "554px", left: "16px", width: "100%", height: "40px", borderRadius: "20px", borderColor: "#f26419"}}
            type="password"
            value={newUser.password2}
            name="password2"
            onChange={handleNewUser}
          />
          <LButton>JOIN THE CLUB!</LButton>
          </PwLDiv>
          <p>
            Already part of CakeWalk Player community?{" "}
            <Link to="/login">Log in</Link>
          </p>
        </Form>
      </SignUpDiv>
    </ParentDiv>
  );
};


export default Signup;

//styles

const ParentDiv = styled.div`
display: flex;
text-align: center;
`

const LogoDiv = styled.div`
background-color: #55dde0;
width: 50% ;
height: 100vh;
display:flex;
flex-direction: column;
align-items: center;
`
const Img = styled.img`

`
const H3 = styled.h3`
margin-top: 200px;
`
const SignUpDiv = styled.div`
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
`

const UsrLabel = styled.label`
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

const Input = styled.input`
font-size: 20px;

margin: 6px;
border: none;
`
const LButton = styled.button`
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

// const StyledForm = Styled.form`
//     padding: 0 30px 25px 30px;
//     width: 300px;
//   margin: 0 auto;
//   position: relative;
//   text-align: left;
//   background: #f3f3f3;
//   border: 1px solid #fff;
//   border-radius: 5px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
//   -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
//   -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
// const Label = Styled.label`
//     text-align: center;
// `;
// const StyledInput = Styled.input`
// width: 188px;
// padding: 10px 25px;
// margin: 0 auto;
// font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
//   Helvetica, Arial, "Lucida Grande", sans-serif;
// font-weight: 400;
// height: 30px;
// color: #9d9e9e;
// text-shadow: 1px 1px 0 rgba(256, 256, 256, 1);
// background: #fff;
// border: 1px solid #fff;
// border-radius: 5px;
// box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
// -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
// -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
// `;

// const StyledH3 = Styled.h3`
// text-align:center
// `;

// const StyledButton = Styled.button`
// background: #28d;
// border-color: transparent;
// color: #fff;
// cursor: pointer;
// width: 80%
// margin: 0 auto;
// margin-top:25px;
// font-weight:bold;
// font-size:14px;
// height:50px;
// border-radius:5px
// &:hover{
//   background:skyblue
// }
// `;

// const StyledParagraph = Styled.div`
// text-align: center;
// margin-top:15px
