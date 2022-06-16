import React from 'react'
import { CloseIcon, 
    Icon, 
    SidebarContainer, 
    SidebarLinkR, 
    SidebarMenu, 
    SidebarRoute, 
    SidebarWrapper,
    SideBtnWrap} from './SideBarElement'
import { SignContext } from '../../context/SignContext'


const Asidebar = ({toggle,isOpen}) => {

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
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLinkR to="/" onClick={toggle}>
                    Home
                </SidebarLinkR>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute onClick={() => changeSignComponent("signin")} to="/signin">Log In</SidebarRoute>
                <SidebarRoute onClick={() => changeSignComponent("signup")} to="/signin">Register</SidebarRoute>
            </SideBtnWrap>
            
        </SidebarWrapper>
    </SidebarContainer>
    </>
  )
}

export default Asidebar