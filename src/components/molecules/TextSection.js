import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes, css } from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";

const showTitle = keyframes`
 0% {
    transform: translateX(-100%);
    opacity: 0;
    width: 0%;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    width: 100%;
  }
`
const fadeInRotate = keyframes`
    0% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
    }
100 % {
    opacity: 1;
    transform: scale(1) rotate(0deg);
}
`
const bounce = keyframes`
 0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
`
const StyledContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  height: 125px;
`
const StyledTitle = styled.h2`
font-size: ${({ theme }) => theme.fontSize.s};
  font-family: "Poppins", sans-serif;
  width: 100%;
  text-align: center;
  color:  ${({ props }) => props ? 'black' : 'white'};
  position: absolute;
  letter-spacing: 4px;
  font-weight: 400;
  height: 100%;
  animation: ${showTitle} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) backwards;
  animation-delay: ${({ props }) => props ? `4s` : `5s`};
  /* opacity: ${({ props }) => props ? '0' : '1'}; */
`

const StyledCircleBtn = styled.div`
 position: absolute;
  bottom: 5px;
  text-align: center;
  width: 50px;
  height: 50px;
  border: 2px solid ${({ props }) => props ? 'black' : 'white'};
  justify-content: center;
  border-radius: 50%;
  transform: scale(1) rotate(0deg);
  display: flex;
align-items: center;
 animation: ${fadeInRotate} 2s linear ${({ props }) => props ? `5s` : `6s`} backwards, ${bounce} 2s infinite;
 /* opacity: ${({ props }) => props ? '0' : '1'}; */
`
const StyledIconSpan = styled.span`
animation: ${showTitle} 1.5s cubic-bezier(0.74, 0.06, 0.4, 0.92) ${({ props }) => props ? `4.5s` : `5.5s`} backwards;
 /* opacity: ${({ props }) => props ? '0' : '1'}; */
color: ${({ props }) => props ? `black` : `white`};
font-size: ${({ theme }) => theme.fontSize.l};
cursor: pointer;
:hover {
    color: ${({ theme }) => theme.props};
}
`

const TextSection = ({ id, name, secondary }) => {
  return (
    <StyledContent>
      <StyledTitle props={secondary}>{name}</StyledTitle >
      <StyledCircleBtn props={secondary}>
        <Link
          activeClass="active"
          to={id}
          spy={true}
          smooth={true}
          duration={1000}
          isDynamic={true}>
          <StyledIconSpan props={secondary}>
            <FontAwesomeIcon icon={faArrowDown} />
          </StyledIconSpan>
        </Link>
      </StyledCircleBtn >
    </StyledContent>
  )
}

export default TextSection
