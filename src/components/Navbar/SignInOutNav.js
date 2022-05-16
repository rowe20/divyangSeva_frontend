import React, { useState,useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { Nav,
    NavbarContainer,
     NavLogo,
     MobileIcon,
     NavMenu,
     NavItem,
     NavLinkr,
     NavBtn,
     NavBtnLink 
   } from './NavbarElements'


const SignInOutNav = ({toggle}) => {
    const [scrollNav, setscrollNav] = useState(false)
    const [textColor, settextColor] = useState(true)
    const changeNav = ()=>{
    if(window.scrollY >= 80){
        setscrollNav(true);
        settextColor(!textColor);
    }
    else{
        setscrollNav(false)
    }
    //settextColor(!textColor)
    }

    useEffect(()=>{
    window.addEventListener('scroll',changeNav)
    },[]);

    const toggleHome = () =>{
    scroll.scrollToTop();
    };
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>
        Divyang Seva
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinkr textColor={textColor} to='/'>Home</NavLinkr>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default SignInOutNav