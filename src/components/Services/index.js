import React from 'react'
import { ServicesCard, 
    ServicesContainer, 
    ServicesH1, 
    ServicesH2, 
    ServicesIcon, 
    ServicesP, 
    ServicesWrapper } from './ServicesElement'

import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg2.svg'
import Icon3 from '../../images/svg3.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Disability Certificate</ServicesH2>
                <ServicesP>We help you in creating the differently-abled certificate in ease.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Railway Concession</ServicesH2>
                <ServicesP>We help you achieve a railway Concessionby just one click.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Paralympics News</ServicesH2>
                <ServicesP>We keep you updated regarding the latest sports news/events.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services