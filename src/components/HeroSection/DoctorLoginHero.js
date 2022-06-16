import React,{useContext, useEffect, useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElement'
import Video from '../../videos/8.mp4'
import { Button } from '../ButtonElement'
import Login from '../SignIn'
import DoctorLogin  from '../SignIn/DoctorLogin'

import SignUp from '../SignUp'


const DoctorLoginHero = (props) => {
    const [hover, sethover] = useState(false)
    let {signStatus,setsignstatus} = props
    console.log(signStatus);
    
    const onHover = () =>{
        sethover(!hover)
    }
    
    

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            {signStatus ==="signin"&&<HeroH1>Log In</HeroH1>}
            {signStatus ==="signup"&&<HeroH1>Sign Up</HeroH1>}
            
            {/* <HeroP>
                Let's Get You Started!
            </HeroP> */}
            {/* <Login/> */}
            {signStatus ==="signin"&&<DoctorLogin/>}
            {signStatus ==="signup"&&<SignUp/>}
        </HeroContent>
    </HeroContainer>
  )
}

export default DoctorLoginHero