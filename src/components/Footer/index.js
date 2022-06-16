import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIcons, SocialIconsLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElement'
import {FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { SignContext } from '../../context/SignContext'
const Footer = () => {
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

    const toggleHome = () =>{
        scroll.scrollToTop();
      };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            
                            <FooterLink to="/signin">Email : Divyang@gmail.com</FooterLink>
                            <FooterLink to="/signin">Helpline No : +919999999999</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Pages</FooterLinkTitle>
                            
                            <FooterLink to="/signin">Home</FooterLink>
                            <FooterLink onClick={() => changeSignComponent("signin")} to="/signin">Login</FooterLink>
                            <FooterLink onClick={() => changeSignComponent("signup")} to="/signin">Register</FooterLink>
                            <FooterLink to="/signin">Sports News</FooterLink>
                            
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Divyang Seva
                    </SocialLogo>
                    <WebsiteRights>Copyrighted {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconsLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconsLink>
                        <SocialIconsLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconsLink>
                        <SocialIconsLink href='/' target="_blank" aria-label="Youtube">
                            <FaYoutube/>
                        </SocialIconsLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer