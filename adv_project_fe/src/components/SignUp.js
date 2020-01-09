import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ori from "../SVG/ori.svg"
import title from "../SVG/title.svg"

const Signup = props => {
  //state
  const [newUser, setNewUser] = useState({ username: "", password1: "", password2:"" });

  const submitInfo = (event) => {
    event.preventDefault();

    axios.post("https://text-adv-game.herokuapp.com/api/registration/", newUser)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.key);
            // props.history.push("/");
        })
        .catch(err => console.log(err));
      }


  const handleNewUser = e => {
    const {name, value} = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <ParentDiv>
      <LogoDiv>
        <H3>ORI'S GALAX QUEST</H3>
        <Img style={{maxWidth:"50%"}} src={ori} alt="Ori" />
      </LogoDiv>
      <SignUpDiv>
        <Form onSubmit={e => submitInfo(e, newUser)}>
          <h3>Sign up!</h3>
          <UsrLabel>username</UsrLabel>
          <Input
            type="text"
            value={newUser.username}
            name="username"
            onChange={handleNewUser}
          />
          <PwLabel>password</PwLabel>
          <Input
            type="password"
            value={newUser.password1}
            name="password1"
            onChange={handleNewUser}
          />
          <PwLabel>retype password</PwLabel>
          <Input
            type="password"
            value={newUser.password2}
            name="password2"
            onChange={handleNewUser}
          />
          <LButton>Join the club!</LButton>
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

const ParentDiv = styled.div `
display: flex;
text-align: center;
`

const LogoDiv = styled.div `
background-color: #55dde0;
width: 50% ;
height: 100vh;
display:flex;
flex-direction: column;
align-items: center;
`
const Img = styled.img `

`
const H3 = styled.h3 `
margin-top: 200px;
`
const SignUpDiv = styled.div `
display: flex;
background-color: #f26419;
width: 50% ;
justify-content: center;
`

const Form = styled.form `
margin-top: 200px;
flex-direction: column;
flex-wrap: wrap;
display: flex;
`

const UsrLabel = styled.label `
font-family: 'Exo 2', sans-serif;
font-weight:bold;
font-size:20px;

`
const PwLabel = styled.label `
font-family: 'Exo 2', sans-serif;
font-weight:bold;
font-size:20px;
`

const Input =styled.input `
font-size: 20px;
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
