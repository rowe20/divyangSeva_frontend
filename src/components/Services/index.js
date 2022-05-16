import React from 'react'
import { ServicesCard, 
    ServicesContainer, 
    ServicesH1, 
    ServicesH2, 
    ServicesIcon, 
    ServicesP, 
    ServicesWrapper } from './ServicesElement'

import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg1.svg'
import Icon3 from '../../images/svg1.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help reduce your expenses and increase your revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Virtual Office</ServicesH2>
                <ServicesP>We help reduce your expenses and increase your revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premuim Benefits</ServicesH2>
                <ServicesP>We help reduce your expenses and increase your revenue.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services