import React, { useState } from "react";
import styled from "styled-components";
import kim from "../images/kim.png"
import chad from "../images/chad.png"
import ann from "../images/ann.png"
import bilguun from "../images/bilguun.png"
import sean from "../images/sean.png"


const AboutDiv = styled.div`
display: flex;
flex-direction: column;
margin: 30px;
text-align: center;
`
const GreetSpan = styled.span`
font-size: 80px;
font-family: 'Exo 2', sans-serif;
color: #f26419;
font-weight: bold;
margin-bottom: 40px;
`

const DescpContainer = styled.div `
text-align: center;
font-family: 'Exo 2', sans-serif;
color: white;

`

const Kim = styled.div`
display: flex;
flex-direction: row-reverse
 
`
const KNameH1 = styled.h1`

`
const KDiscSpan = styled.h3`
`
const KDiscH3 = styled.h3`
`
const KDescpContainer = styled.div`
background-color: RGBA(255,213,55,0.71);
width: 70% ;
height: 40vh;
align-items: center;
border-radius: 60px;
margin-right: 20px;
margin-top: 40px;
`

//Chad
const Chad = styled.div`
display: flex;
`
const CNameH1 = styled.h1`
`
const CDiscSpan = styled.h3`
`
const CDiscH3 = styled.h3`
`
const CDescpContainer = styled.div`
background-color: RGBA(242,100,25,0.76);
width: 70% ;
height: 40vh;
align-items: center;
border-radius: 60px;
margin-right: 20px;
margin-top: 40px;
`

//Ann
const Ann = styled.div`
display: flex;
`
const ANameH1 = styled.h1`
`
const ADiscSpan = styled.h3`
`
const ADiscH3 = styled.h3`
`
const ADescpContainer = styled.div`
background-color: RGBA(229,229,229,0.79);
width: 70% ;
height: 40vh;
align-items: center;
border-radius: 60px;
margin-right: 20px;
margin-top: 40px;
`
//Bil
const Bilguun = styled.div`
display: flex;
flex-direction: row-reverse
`
const BNameH1 = styled.h1`
`
const BDiscSpan = styled.h3`
`
const BDiscH3 = styled.h3`
`
const BDescpContainer = styled.div`
background-color: RGBA(51,101,138,0.79);
width: 70% ;
height: 40vh;
align-items: center;
border-radius: 60px;
margin-right: 20px;
margin-top: 40px;
`


//Sean
const Sean = styled.div`
display: flex;
`
const SNameH1 = styled.h1`
`
const SDiscSpan = styled.h3`
`
const SDiscH3 = styled.h3`
`
const SDescpContainer = styled.div`
background-color: RGBA(85,221,224,0.7);
width: 70% ;
height: 40vh;
align-items: center;
border-radius: 60px;
margin-right: 20px;
margin-top: 40px;
`




const About = () => {
    return (
    <AboutDiv>
        <GreetSpan>MEET THE TEAM OF ENGINEERS!</GreetSpan>
        <Ann>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={ann} 
            alt="Ann Suparada Saitalae" />
            <ADescpContainer>
                <DescpContainer>
                    <ANameH1>ANN SUPARADA SAITALAE</ANameH1>
                    <ADiscH3>The Moon</ADiscH3>
                    <ADiscSpan>I have learn a lot on this project. My team and I learned a new language, Django, within 3 days and we ware able to apply algorithm from the past 3 week that we have learn in Lambda. We can created a MUD game and beautiful UI. I was so proud of this project.</ADiscSpan>
                </DescpContainer>
            </ADescpContainer>
        </Ann>

        <Kim>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={kim} 
            alt="Kimberly Swinton" />
            <KDescpContainer>
                <DescpContainer>
                    <KNameH1>KIMBERLY SWINTON</KNameH1>
                    <KDiscH3>The Sun</KDiscH3>
                    <KDiscSpan>I like trains...</KDiscSpan>
                </DescpContainer>
            </KDescpContainer>
        </Kim>

        <Chad>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={chad} 
            alt="Chad Kidd" />
            <CDescpContainer>
                <DescpContainer>
                    <CNameH1>CHAD KIDD</CNameH1>
                    <CDiscH3>Mars</CDiscH3>
                    <CDiscSpan>Chad Kidd is a DJ from Los Angeles who decided to take their hobby of website design and turn it into a career through Lambda School’s Full Stack Web program. Their goals after Lambda is to work for a company that appreciates and promotes diversity and inclusivity. They also will be linking up with organizations who introduce under privileged youth to web development and hope to spearhead their own in the future.</CDiscSpan>
                </DescpContainer>
            </CDescpContainer>
        </Chad>

        <Bilguun>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={bilguun} 
            alt="Bilguun Nonch" />
            <BDescpContainer>
                <DescpContainer>
                    <BNameH1>BILGUNN NOMCH</BNameH1>
                    <BDiscH3>Jupiter</BDiscH3>
                    <BDiscSpan>Bilguun Nomch, born and raised in Mongolia. Dad to two wonderful kids. Aspiring to  become an experienced software developer.Would love to work in an environment where I can continue to learn. This project introduced me to working with Django and helped me refresh my React skills. It was great working and learning from such a great team. </BDiscSpan>
                </DescpContainer>
            </BDescpContainer>
        </Bilguun>

        <Sean>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={sean} 
            alt="Sean McDonnell" />
            <SDescpContainer>
                <DescpContainer>
                    <SNameH1>SEAN MCDONNELL</SNameH1>
                    <SDiscH3>Saturn</SDiscH3>
                    <SDiscSpan>A Philadelphia based web developer driven by a love of problem solving, an attention to detail, and a desire to continually improve.</SDiscSpan>
                </DescpContainer>
            </SDescpContainer>
        </Sean>


    </AboutDiv>
    )
}

export default About;