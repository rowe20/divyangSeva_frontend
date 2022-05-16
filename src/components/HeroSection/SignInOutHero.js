import React,{useContext, useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElement'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import Login from '../SignIn'
import { SignContext } from '../../context/SignContext'

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
            <HeroH1>Sign In</HeroH1>
            <HeroP>
                Let's Get You Started!
            </HeroP>
            {signStatuscheck.signStatus ==="signin"&&<Login/>}
            {signStatuscheck.signStatus ==="signup"&&<h1>signup</h1>}
            {/* <Login/> */}
            
            {/* <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} OnMouseLeave={onHover} primary="true" dark='true'>
                    Get started {hover ? <ArrowForward/>:<ArrowRight/> }
                </Button>
            </HeroBtnWrapper> */}
        </HeroContent>
    </HeroContainer>
  )
}

export default SignInOutHero
