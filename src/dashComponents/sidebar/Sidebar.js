import "./Sidebar.css";
import logo from "../../dashComponents/assets/logo.png";
import { Link } from "react-router-dom";
import {FaTimes} from 'react-icons/fa'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Divyang Seva</h1>
        </div>
        <FaTimes onClick={() => closeSidebar()}/>
      </div>


      {/* Admin Dashboard Side Nav
      <div className="sidebar__menu">
        <div className="sidebar__link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Available Request</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Completed Certificates</a>
        </div>
        
        <h2>User Side</h2>
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-question"></i>
          <a href="#">Profile</a>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div> */}

      {/* User sideNav */}
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Apply For Certificate</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">View Status</a>
        </div>
        
        <h2>User Side</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Profile</a>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
