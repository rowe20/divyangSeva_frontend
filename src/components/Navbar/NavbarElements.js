import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll/modules'

import styled from 'styled-components'


export const Nav = styled.nav`
&&&{
background: ${({scrollNav})=>(scrollNav ? '#000':'transparent')};
height: 80px;
margin-top: -80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and (max-width:960px){
    transition: 0.8s all ease;
}
}
`

export const NavbarContainer = styled.section`
&&&
{display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
max-width: 1100px;}
`

export const NavLogo = styled(LinkR)`
&&&{
color: #fff;
justify-self:flex-start;
cursor:pointer;
font-size:1.9rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration: none;
}
`

export const MobileIcon = styled.section`
&&&{display: none;

@media screen and (max-width: 768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;
}}
`

export const NavMenu = styled.ul`
&&&{display:flex;

list-style:none;
text-align:center;
margin-right: -22px;

@media screen and (max-width:768px){
    display:none;
}}
`

export const NavItem = styled.li`
&&&{height:80px;}
`
// ${({textColor})=>(textColor ? '#fff':'#010606')};
export const NavLinks = styled(LinkS)`
&&&{
color: #fff;
display:flex;
align-items: center;
text-decoration:none;
padding:0 1em;
height: 100%;
cursor: pointer;
font-size: 1.0rem;
font-weight: 600;

&.active{
    border-bottom: 3px solid #01bf71;
}}
`
// ${({textColor})=>(textColor ? '#fff':'#010606')};
export const NavLinkr = styled(LinkR)`
&&&{color:#fff;
display:flex;
align-items: center;
text-decoration:none;
padding:0 1rem;
height: 100%;
cursor: pointer;
font-size: 1.2em;
font-weight: 600;


&.active{
    border-bottom: 3px solid #01bf71;
}}
`
export const NavBtn = styled.nav`
&&&{display:flex;
align-items: center;

@media screen and (max-width:768px){
    display:none;

}}
`

export const NavBtnLink = styled(LinkR)`
&&&{border-radius:50px;
background:#01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size:16px;
outline: none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}}

`
export const NavWeather = styled.section`
color: #fff;
justify-self:flex-start;
cursor:none;
font-size:0.5rem;
display:flex;
align-items:center;
margin-left:10px;
font-weight:bold;
text-decoration: none;

@media screen and (max-width:768px){
    display:none;

}}
}
`

export const NavWeatherH1 = styled.h1`
color:#fff;
text-align:center;
font-size: 0.9rem;
`
export const NavWeatherSection = styled.section`

`
export const NavWeatherImg = styled.img`
float:left;
height:40px;
width:40px;
`
export const NavWeatherReport = styled.article`
float:right;
display:grid;
grid-template-columns:auto;
`
export const NavWeatherTemp = styled.h4`
grid-area:1 / 1;
font-size:1.0rem;
font-weight:bold;
`
export const NavWeatherRow = styled.article`
grid-area:2 / 1;
font-size:0.7rem;
height:-10px;
`
