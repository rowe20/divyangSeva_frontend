import React,{useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElement'
import Video from '../../videos/7.mp4'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, sethover] = useState(false)
    const onHover = () =>{
        sethover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Differently-abled Lives Made Easier.</HeroH1>
            <HeroP>
                Sign up now to apply for a Differently-abled  
                Certificate valid 
                everywhere from your home's comfort.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} OnMouseLeave={onHover} primary="true" dark='true'>
                    Get started {hover ? <ArrowForward/>:<ArrowRight/> }
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection