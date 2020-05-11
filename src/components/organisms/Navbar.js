import React, { useEffect } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import styled, { keyframes, css } from "styled-components";
import myLogo from '../../assets/pictures/logo_red.png';
import whiteLogo from '../../assets/pictures/myLogo.png'

const showNavigation = keyframes`
  0% {
    width: 0%;
    opacity:0;

  }
 50%{
      opacity:0;
  }
  100% {
    width: 100%;
    opacity:1;
  }

`


const StyledWrapper = styled.div`
width: 0%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 3;
  background-color: ${({ props }) => props};
  height: 80px;
  text-align: center;
  animation-delay:1s;
  animation: ${showNavigation} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  /* transition: background 0.2s ease-in-out; */
`;

const StyledNavItem = styled.div`
  border: none;
  position: relative;
  margin: 10px;
  cursor:pointer;

  `;
const StyledMainLogo = styled.div`
background: url(${({ icon }) => icon});
width: 60px;
height: 60px;
background-repeat: no-repeat;
background-size: contain;
display: block;
opacity: 1;
transition: opacity 0.3s ease-out;

:hover {
    opacity: 0;
}
`
const StyledSecondLogo = styled.div`
background: url(${({ icon }) => icon});
width: 60px;
height: 60px;
background-repeat: no-repeat;
background-size: contain;
display: block;
position: absolute;
top: 0;
opacity: 0;
transition: opacity 0.3s ease-out;
:hover  {
    opacity: 1;
}
`

const StyledListItemView = styled.ul`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const StyledItemView = styled.div`
 align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.m};
  height: 54px;
  margin: 15px;
  padding: 10px;
  font-weight: ${({ theme }) => theme.bold};
  list-style-type: none;
  text-align: center;
  text-decoration: none;
overflow: hidden;
position: relative;
`;
const StyledLink = styled(Link)``

const StyledListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

`
const StyledItemBar = styled.span`
  position: relative;
  display: block;
  margin-top: 5px;
  ::before, ::after{
 content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: ${({ theme }) => theme.primary};
  transition: 0.2s ease all;
  }
  ::before{
       left: 50%;
  }
  ::after{
        right: 50%;
  }
  ${StyledListItem}:hover & {
      ::before{
          width: 50%;
      }
      ::after {
          width: 50%;
      }
  }
    ${StyledLink}.active & {
       ::before{
          width: 50%;
      }
      ::after {
          width: 50%;
      }
  }

`

const Navbar = ({ backgroundColor }) => {
    console.log({ backgroundColor });
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <StyledWrapper props={backgroundColor}>
            <StyledNavItem onClick={scrollToTop}>
                <StyledMainLogo icon={myLogo} />
                <StyledSecondLogo icon={whiteLogo} />
            </StyledNavItem>
            <StyledListItemView >
                <StyledItemView>
                    <StyledListItem>
                        <StyledLink activeClass="active"
                            to="aboutMe"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            isDynamic={true}
                        // id="aboutID"
                        >
                            About Me
                        <StyledItemBar />
                        </StyledLink>
                    </StyledListItem>
                </StyledItemView>
                <StyledItemView>
                    <StyledListItem>
                        <StyledLink activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1000}
                            isDynamic={true}
                        >
                            Skills
                        <StyledItemBar />
                        </StyledLink>
                    </StyledListItem>
                </StyledItemView>
                <StyledItemView>
                    <StyledListItem>
                        <StyledLink activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1000}
                            isDynamic={true}>
                            Portfolio
                        <StyledItemBar />
                        </StyledLink>
                    </StyledListItem>
                </StyledItemView>
                <StyledItemView>
                    <StyledListItem>
                        <StyledLink activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1000}
                            isDynamic={true}>
                            Contact
                        <StyledItemBar />
                        </StyledLink>
                    </StyledListItem>
                </StyledItemView>
            </StyledListItemView >
        </StyledWrapper >

    )
}

export default Navbar
