import React,{ useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
// import { useNavigate } from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll'
import { SignContext } from '../../context/SignContext'


import { Nav,
   NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink 
  } from './NavbarElements'



const Navbar = ({toggle}) => {
const [scrollNav, setscrollNav] = useState(false)

const changeNav = ()=>{
  if(window.scrollY >= 80){
    setscrollNav(true);

  }
  else{
    setscrollNav(false)
  }

}

useEffect(()=>{
  window.addEventListener('scroll',changeNav)
},[]);

const toggleHome = () =>{
  scroll.scrollToTop();
};


// const navigate = useNavigate();
const signButton = React.useContext(SignContext);
const changeSignComponent =(status)=>{
  if(status === "signin")
  {
    signButton.setsignStatus("signin")
    console.log(signButton.signStatus);
  }
  else{
    signButton.setsignStatus("signup")
    console.log(signButton.signStatus);
  }

}

  return (
    <>
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
            <NavLinks  to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks  to='sports' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sports</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks  to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          {/* //try OnClick */}
          {/*  onClick={() => changeSignComponent(1)} */}
          <NavBtnLink onClick={() => changeSignComponent("signin")} to="/signin" >Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink onClick={() => changeSignComponent("signup")} to="/signin">Sign Up</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar