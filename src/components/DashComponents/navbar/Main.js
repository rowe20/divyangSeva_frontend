import React, { useContext, useEffect } from 'react';
import { FaHeart, FaBars } from 'react-icons/fa';
import { Col, Container, Row } from 'reactstrap';
import reactLogo from '../assets/assets/logo.svg';
import Uprofile from '../profileSection/Uprofile';
import Udashboard from '../dashBoard/Udashboard';
import UCertificate from '../certificate/UCertificate';
import Aprofile from '../profileSection/Aprofile';
import { DashboardCurrentNavContext } from '../../../context/DashboardCurrentNavContext';
import { UserRoleContext } from '../../../context/UserRoleContext';
import { SignContext } from '../../../context/SignContext';
import '../assets/styles/dash.scss'
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Main = ({
  collapsed,
  handleToggleSidebar,
  handleCollapsedChange,
  handleImageChange,
}) => {

  const currentnav = useContext(DashboardCurrentNavContext);
  const userRole = useContext(UserRoleContext);
  const signInOut = useContext(SignContext);
  const nav = currentnav.currentNav;
  console.log(nav);
  const navigate = useNavigate();
  
  // const logout = () => {
  //   changeSignComponent("");
  
  //   toast.success("Loggged Out Succesfully",{
  //     position:toast.POSITION.BOTTOM_CENTER,
  //     autoClose: 2000,
  //     transition:Zoom,
  //   });
  
  //   setTimeout(()=>{
  //     localStorage.setItem("signStatus","")
  //     window.location.reload();
  //   },3000); 
  // }


  function render(){
    if(localStorage.getItem('userRole') === 'user')
    {
      switch(nav){

        case "Dashboard": 
          return <Udashboard/>;
        case "Profile":
          return <Uprofile/>;
        case "Apply Certificate":
          return <UCertificate/>
          default: {
            toast.success("Loggged Out Succesfully",{
              position:toast.POSITION.BOTTOM_CENTER,
              autoClose: 2000,
              transition:Zoom,
            });
          
            setTimeout(()=>{
              currentnav.setcurrentNav("Dashboard");
              localStorage.setItem('userRole','');
              userRole.setuserRole('');
              signInOut.setsignStatus('');
              localStorage.setItem('userName','');
              localStorage.removeItem('userToken');
              localStorage.removeItem('userEmail');
              localStorage.setItem("signStatus","");
              navigate("/");
                // window.location.reload();

            },3000); 
            ;

            
            
          }
      }
    }
    else if (localStorage.getItem('userRole') === 'admin')
    {
      console.log("pending");
    }
    else{
      // <h1>Who are you</h1>
    }
  }




  return (
    <main>
      <header>
        <ToastContainer/>
        <Container>
          <Row>
            <Col xs='auto' md='auto'>
            <h1>
              <img width={80} src={reactLogo} alt="react logo" /> Welcome {localStorage.getItem('userName')}
            </h1>
            <p>Dashboard</p>
            </Col>
            <Col xs='auto' md='auto' className='align-toggle'>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
            </Col>
          </Row>
        </Container>
        
        
      </header>
      <div className="block "> 
      {render()}
      
      
      
      {/* <Aprofile/> */}
      {/* add main content */}
        {/* <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        <span> Collapsed</span> */}
      </div>

      <footer>
        <small>
          © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="#">
            Roshan
          </a>
        </small>
        <br />
      </footer>
    </main>
  );
};

export default Main;
