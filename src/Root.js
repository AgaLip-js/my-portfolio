import React, { useRef, useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './Root.css';
import GlobalStyle from './theme/GlobalStyle';
import Navbar from './components/organisms/Navbar';
import LandingPage from './views/LandingPage';
import { theme } from './theme/MainTheme'
import AboutMeView from './views/AboutMeView';
import SkillsView from './views/SkillsView';
import PortfolioView from './views/PortfolioView';

const StyledViews = styled.div`
height:100%;
`

function Root() {
  console.log(window.innerHeight);

  const [navBackground, setNavBackground] = useState(false);
  // const [activeClass, setActiveClass] = useState(false);
  // useEffect(() => {
  //   Events.scrollEvent.register('begin', function (to, element) {
  //     console.log(arguments);
  //   });

  //   Events.scrollEvent.register('end', function (to, element) {
  //     console.log("end", arguments[0]);
  //   });

  //   scrollSpy.update();
  //   return () => {
  //     Events.scrollEvent.remove('begin');
  //     Events.scrollEvent.remove('end');
  //   }
  // }, [arguments])



  const navRef = useRef()
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY >= window.innerHeight - 125;
      if (navRef.current !== show) {
        setNavBackground(show)
        // setActiveClass(true)
      }
    }
    document.addEventListener('scroll', handleScroll)
    // return () => {
    //   document.removeEventListener('scroll', handleScroll)
    // }
  }, [])
  console.log(window.innerHeight);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar backgroundColor={navBackground ? '#141819' : 'transparent'} />
        <LandingPage id="landingPage" />
        <StyledViews>
          <AboutMeView id="aboutMe" name="aboutMe" />
          <SkillsView id="skills" name="skills" />
          <PortfolioView id="portfolio" />
        </StyledViews>
      </ThemeProvider>
    </>
  );
}

export default Root;
