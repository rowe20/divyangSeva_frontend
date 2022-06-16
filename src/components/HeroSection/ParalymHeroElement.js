import React,{useContext, useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, ImageBg, VideoBg } from './HeroElement'
import BgImage from '../../images/4.jpg'
import { Button } from '../ButtonElement'
import Login from '../SignIn'
import { SignContext } from '../../context/SignContext'
import SignUp from '../SignUp'

const ParalymHeroElement = () => {
    // const [hover, sethover] = useState(false)

    // const onHover = () =>{
    //     sethover(!hover)
    // }
  return (
    <HeroContainer>
        <HeroBg>
            <ImageBg src={BgImage}/>
        </HeroBg>
        <HeroContent>
            
            
            <HeroH1>
                Latest sports News
            </HeroH1>
            <HeroP>
            Watch the best live coverage of your favourite sports: Football, Golf, Rugby, Cricket, F1, Boxing, NFL, NBA, plus the latest sports news, transfers & scores.
            </HeroP>
            
        </HeroContent>
    </HeroContainer>
  )
}

export default ParalymHeroElement