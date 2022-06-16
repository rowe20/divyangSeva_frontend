import axios from 'axios'
import React, { useState,useEffect, useContext } from 'react'
import {FaBars} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll'
import { Nav,
    NavbarContainer,
     NavLogo,
     MobileIcon,
     NavMenu,
     NavItem,
     NavLinkr, 
     NavWeather,
     NavWeatherSection,
     NavWeatherImg,
     NavWeatherReport,
     NavWeatherTemp,
     NavWeatherRow,
     NavLinks
   } from './NavbarElements'

const ParalymNav = ({toggle}) => {
  const navigate = useNavigate();
    const [scrollNav, setscrollNav] = useState(false)
    const [textColor, settextColor] = useState(true)
    const [city, setcity] = useState({
        cityname:"pune"
      })
      
      const [temp, settemp] = useState({
        img:"",
        temp_c:""
      })

    const changeNav = ()=>{
    if(window.scrollY >= 80){
        setscrollNav(true);
        settextColor(!textColor);
    }
    else{
        setscrollNav(false)
    }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
        },[]);

    useEffect(() => {
        axios.post("/api/weather",city)
        .then((res)=>{
            settemp({...temp,temp_c: res.data.data.current.temp_c,img: res.data.data.current.condition.icon});
        })
        }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
        };
      
      

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
            {/* <NavLinkr textColor={textColor} to='/'>Home</NavLinkr> */}
            <NavLinks textColor={textColor} onClick={()=> navigate('/')} >Home</NavLinks>
            
          </NavItem>
        </NavMenu>
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

export default ParalymNav