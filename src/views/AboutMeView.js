import React, { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import './AboutMeView.css';
import TextSection from '../components/molecules/TextSection';

const showTopText = keyframes`
0% {
        transform: translateX(-100%);
        opacity:0;
    }
    100% {
        transform: translateX(0);
        opacity:1;
    }
`
const showBottomText = keyframes`
0% {
        transform: translate3d(0, -100%, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
`
const showText = keyframes`
 0% {
    transform: translateY(100%);
    opacity: 0;

  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;

  }
`

const StyledWrapper = styled.div`
height: 100%;
width: 100%;
background-color: white;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
       justify-content: space-around;
    align-items: center;
    position:relative;

`
const StyledContainer = styled.div`
display:flex;
width:100%;
justify-content: space-around;
align-items:center;
text-align: center;
margin: 20px 0;
`
const StyledLeftContainer = styled.div`
width: 300px;
`
const StyledTitle = styled.h2`
height: 50px;
    overflow: hidden;
    position: relative;
    margin-top: 80px;
     color: #111517;
    font-size: 36px;
        text-transform: uppercase;
    border-bottom: 2px solid #ef0d33;
    opacity:0;
    animation:${showTopText} 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) 0.5s forwards;
`
const StyledPhotoBorder = styled.div`
background: black;
width:300px;
height:300px;
opacity:0;
${props => props.secondary && css`
       animation: ${showText} 1.5s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    `};
`
const StyledInfo = styled.div`
width: 50%;
height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    text-align: justify;

`
const StyledText = styled.p`
font-size: 22px;
opacity:0;

${props => props.secondary && css`
       animation: ${showText} 1.5s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    `};
`
const StyledAnimatedTitle = styled.div`
  color: #222;
    position: relative;
`
const StyledTextTop = styled.div`
height: 130px;
    overflow: hidden;
    position: relative;
    width: 100%;
    /* border-bottom: 1vmin solid #000; */
`
const StyledContainerText = styled.div`
    font-size: 36px;
    padding: 2vmin 10px 10px 10px;
    position: relative;
    transform: translate(0, 100%);
    ${props => props.secondary && css`
        animation: ${showTopText} 1.5s;
        animation-iteration-count: 1;
        animation-delay: 1s;
        animation-fill-mode: forwards;
    `};

`
const StyledFirstText = styled.span`
    display:block;
    color: #ff1616;
  
`
const StyledSecondText = styled.span`
`
const StyledTextBottom = styled.div`
    color: #111517;
    font-size: 36px;
    height: 130px;
    overflow: hidden;
    width: 100%;
`
const StyledThirdText = styled.div`
transform: translate(0, -100%);
font-weight: bold;
opacity:0.3;
${props =>
        props.secondary && css`
        animation:${showBottomText} 1s forwards;
        animation-delay: 2.5s;
       animation-iteration-count: 1;
    `};


`
const StyledButton = styled.button`
height:50px;
position: absolute;
overflow: hidden;
opacity:0;
    display: block;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    border: 2px solid transparent;
    border-radius: 2px;
    transition: background-color .3s;
    width: 300px;
    font-size: 22px;
background-color: #ef0d33;
font-family:'Poppins', sans-serif;
color: #fff;
bottom:0;
z-index:1;
cursor: pointer;
${props =>
        props.secondary && css`
animation: ${showText} 1.5s cubic-bezier(0.74, 0.06, 0.4, 0.92) 0.5s forwards;
    `};
::after{
    content: '';
    z-index:-1;
    position:absolute;
    width:100%;
    height:100%;
    background-color: #d20b2d;
    top: 0;
    right:-100%;
    transition: transform 0.5s ease-out;
    will-change: transform;
}
:hover::after {
    transform: translateX(-100%);
}
`
const StyledHoverPanels = styled.div`
display:flex;
    justify-content: space-around;
    width: 80%;
        margin: 30px auto;

`
const StyledSkillsCard = styled.div`
background-color: black;
    border: 1px solid #000000;
    padding: 10px;
    opacity: 0.3;
    color: white;
    box-shadow: 0 10px 6px -6px;
        width: 215px;
            text-align: center;
}
`

const AboutMeView = ({ id, name }) => {
    const [state, setstate] = useState(false)
    useEffect(() => {
        const page = document.querySelector(".aboutMe");
        window.addEventListener("scroll", () => {
            const pageTop = page.getBoundingClientRect().top;
            const pageBottom = page.getBoundingClientRect().bottom;
            console.log(pageTop);
            console.log(pageBottom);

            if (window.scrollY > pageTop && window.scrollY < pageBottom - 125) {
                setstate(true);
            }
        })
    }, []);

    console.log({ state })
    return (
        <StyledWrapper className="aboutMe" id={id} name={name} >
            <StyledTitle>About Me</StyledTitle>
            <StyledContainer >
                <StyledLeftContainer>
                    <StyledPhotoBorder secondary={state}>
                    </StyledPhotoBorder>
                    {/* <StyledAnimatedTitle >
                        <StyledTextTop >
                            <StyledContainerText secondary={state}>
                                <StyledFirstText>
                                    {`<Hello/>`}
                                </StyledFirstText>
                                <StyledSecondText>
                                    My name is
                                </StyledSecondText>
                            </StyledContainerText>
                        </StyledTextTop>
                        <StyledTextBottom>
                            <StyledThirdText secondary={state} >Agata</StyledThirdText>
                        </StyledTextBottom>
                    </StyledAnimatedTitle> */}
                </StyledLeftContainer>
                <StyledInfo>
                    <StyledText secondary={state}>
                        Six months ago I've started learning programming and since then I have been constantly developing my skills to become a professional front-end developer.
                        Programming has become my passion, which I constantly develop.
                        <br />
                        <br />I'm learning how to create responsive, intuitive and fast-running aplications and websites. I put emphasis on simplicity, functionality and dynamics.
                    </StyledText>
                    <StyledButton secondary={state} type="button"> Why me?
                    </StyledButton>
                </StyledInfo>
            </StyledContainer>
            <StyledHoverPanels>
                <StyledSkillsCard> Good Organization Skills </StyledSkillsCard>
                <StyledSkillsCard> Discipline </StyledSkillsCard>
                <StyledSkillsCard> Team Player </StyledSkillsCard>
                <StyledSkillsCard> Ambition </StyledSkillsCard>
                <StyledSkillsCard> Willness to learn </StyledSkillsCard>
            </StyledHoverPanels>
            <TextSection id="skills" name="Skills" secondary={state} />
        </StyledWrapper >

    )
}

export default AboutMeView
