import React,{useContext, useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElement'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import Login from '../SignIn'
import { SignContext } from '../../context/SignContext'
import SignUp from '../SignUp'

const SignInOutHero = () => {
    const [hover, sethover] = useState(false)
    
    const signStatuscheck = useContext(SignContext);
    console.log(signStatuscheck.signStatus)

    const onHover = () =>{
        sethover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            {signStatuscheck.signStatus ==="signin"&&<HeroH1>Sign In</HeroH1>}
            {signStatuscheck.signStatus ==="signup"&&<HeroH1>Sign Up</HeroH1>}
            
            <HeroP>
                Let's Get You Started!
            </HeroP>
            {/* <Login/> */}
            {signStatuscheck.signStatus ==="signin"&&<Login/>}
            {signStatuscheck.signStatus ==="signup"&&<SignUp/>}
        </HeroContent>
    </HeroContainer>
  )
}

export default SignInOutHero
