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
`
const DiscpContainer = styled.div `
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


const Ann = styled.div`
display: flex;
`
const ANameH1 = styled.h1`
`
const ADiscSpan = styled.h3`
`
const ADiscH3 = styled.h3`
`

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

const Sean = styled.div`
display: flex;
`
const SNameH1 = styled.h1`
`
const SDiscSpan = styled.h3`
`
const SDiscH3 = styled.h3`
`





const About = () => {
    return (
    <AboutDiv>
        <Ann>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={ann} 
            alt="Ann Suparada Saitalae" />
            <DiscpContainer>
                <ANameH1>Ann Suparada Saitalae</ANameH1>
                <ADiscH3>The Moon</ADiscH3>
                <ADiscSpan>The Moon</ADiscSpan>
            </DiscpContainer>
        </Ann>

        <Kim>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={kim} 
            alt="Kimberly Swinton" />
            <DiscpContainer>
                <KNameH1>Kimberly Swinton</KNameH1>
                <KDiscH3>The Sun</KDiscH3>
                <KDiscSpan>The Moon</KDiscSpan>
            </DiscpContainer>
        </Kim>

        <Chad>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={chad} 
            alt="Chad Kidd" />
            <DiscpContainer>
                <CNameH1>Chad Kidd</CNameH1>
                <CDiscH3>Mars</CDiscH3>
                <CDiscSpan>Mars Mars Mars</CDiscSpan>
            </DiscpContainer>
        </Chad>

        <Bilguun>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={bilguun} 
            alt="Bilguun Kidd" />
            <DiscpContainer>
                <BNameH1>Ann Suparada Saitalae</BNameH1>
                <BDiscH3>Jupiter</BDiscH3>
                <BDiscSpan>T</BDiscSpan>
            </DiscpContainer>
        </Bilguun>

        <Sean>
            <img
            style={{width:"25%", borderRadius:"50%"}} 
            src={sean} 
            alt="Sean McDonnell" />
            <DiscpContainer>
                <SNameH1>Sean McDonnell</SNameH1>
                <SDiscH3>Saturn</SDiscH3>
                <SDiscSpan></SDiscSpan>
            </DiscpContainer>
        </Sean>


    </AboutDiv>
    )
}

export default About;