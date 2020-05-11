import React from 'react'
import styled, { keyframes } from "styled-components";
import background from '../assets/pictures/backgroundCo.jpg'
import './LandingPage.css';
import TextSection from '../components/molecules/TextSection';
import { Link, animateScroll as scroll } from "react-scroll";

const mainBlock = keyframes`
0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
`
const mainFadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const popIn = keyframes`
0% {
    width: 0px;
    height: 0px;
    background: white;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: white;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: white;
    border: 0px solid #222;
    bottom: 13px;
  }
`
const secFadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
background: url(${({ icon }) => icon});
width: 100%;
  height: 100%;
    min-height: 100vh;
background-size: cover;
  background-attachment: fixed;
  margin: 0;
  padding: 0;

`

const StyledContainer = styled.div`
 width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 15%;
   animation-iteration-count: 1;
`

const StyledBox = styled.div`
 width: fit-content;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const StyledTitle = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
`
const StyledFirstBlock = styled.span`

  width: 0%;
  height: inherit;
  background: ${({ theme }) => theme.primary};
  position: absolute;
  animation: ${mainBlock} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 2s;
  display: flex;
`
const StyledNameTitle = styled.h1`
 font-family: "Poppins";
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  -webkit-animation: ${mainFadeIn} 2s forwards;
  -o-animation: ${mainFadeIn}  2s forwards;
  animation: ${mainFadeIn}  2s forwards;
  animation-delay: 3.6s;
  opacity: 0;
  display: flex;
  align-items: baseline;
  position: relative;
`
const StyledAfterTitle = styled.span`
width: 0px;
  height: 0px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: white;
  -webkit-animation: load 1.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation: ${popIn} 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 4s;
  margin-left: 5px;
  margin-top: -10px;
  position: absolute;
  bottom: 13px;
  right: -12px;
`
const StyledRole = styled.div`
 width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
`
const StyledSecondBlock = styled.div`
 width: 0%;
  height: inherit;
  background: ${({ theme }) => theme.secondary};
  position: absolute;
  animation-delay: 2s;
  display: flex;
`
const StyledPositionTitle = styled.p`
animation: ${secFadeIn} 2s forwards;
  animation-delay: 5.2s;
  opacity: 0;
  font-family: "Lato";
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: uppercase;
  letter-spacing: 5px;
`

const LandingPage = () => {

  return (
    <StyledWrapper icon={background}>
      <StyledContainer>
        <StyledBox>
          <StyledTitle>
            <StyledFirstBlock />
            <StyledNameTitle>Agata Lipiak<StyledAfterTitle /></StyledNameTitle>
          </StyledTitle>
          <StyledRole>
            <StyledSecondBlock />
            <StyledPositionTitle>Junior Front-end Developer</StyledPositionTitle>
          </StyledRole>
        </StyledBox>
      </StyledContainer>
      <TextSection id="aboutMe" name="About Me" />
    </StyledWrapper>

  )
}

export default LandingPage
