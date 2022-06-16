import axios from 'axios'
import React,{ useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { SignContext } from '../../context/SignContext'
import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { Nav,
   NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink, 
    NavWeather,
    NavWeatherSection,
    NavWeatherImg,
    NavWeatherReport,
    NavWeatherRow,
    NavWeatherTemp
  } from './NavbarElements'



const Navbar = ({toggle}) => {
const [scrollNav, setscrollNav] = useState(false)
const [city, setcity] = useState({
  cityname:"pune"
})

const [temp, settemp] = useState({
  img:"",
  temp_c:""
})


// useEffect(() => {
//   // axios.post("/api/weather",city)
//   // .then((res)=>{
//   //   settemp({...temp,temp_c: res.data.data.current.temp_c,img: res.data.data.current.condition.icon});
//   // })
// }, [])


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



const signButton = React.useContext(SignContext);
const signStatuscheck = React.useContext(SignContext);



const changeSignComponent =(status)=>{
  if(status === "signin")
  {
    signButton.setsignStatus("signin")  
  }
  else{
    signButton.setsignStatus("signup")
    
  }

}
const logout = () => {
  changeSignComponent("");

  toast.success("Loggged Out Succesfully",{
    position:toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
    transition:Zoom,
  });

  setTimeout(()=>{
    localStorage.setItem("signStatus","")
    window.location.reload();
  },3000); 
}


  return (
    <>
    <ToastContainer/>
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
            <NavLinks to='help' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Help</NavLinks>
          </NavItem>
        </NavMenu>
        {(signStatuscheck.signStatus ==="" || localStorage.getItem("signStatus") === "")&&<>
        <NavBtn>
          <NavBtnLink onClick={() => changeSignComponent("signin")} to="/signin" >Log In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink onClick={() => changeSignComponent("signup")} to="/signin">Register</NavBtnLink>
        </NavBtn></>}

        {(signStatuscheck.signStatus ==="loggedin"|| localStorage.getItem("signStatus") === "loggedin" )&&<>
        <NavBtn>
          <NavBtnLink onClick={() =>logout()} to="/">Logout</NavBtnLink>
        </NavBtn>
        </>}
        
        <NavWeather>
          <NavWeatherSection>
            <NavWeatherImg src={temp.img}></NavWeatherImg>
            <NavWeatherReport>
              <NavWeatherTemp>{temp.temp_c}<span>&#8451;</span>
              <NavWeatherRow>Pune</NavWeatherRow>
              </NavWeatherTemp>
              
            </NavWeatherReport>
          </NavWeatherSection>
        </NavWeather>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar