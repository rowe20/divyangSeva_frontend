import "./Navbar.css";
import avatar from "../../dashComponents/assets/avatar.svg";
import {FaBars} from 'react-icons/fa'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        {/* <i className={<FaBars/>} aria-hidden="true"></i> remeber to remove the x mark on big screen */}
        <FaBars/>
      </div>
      <div className="navbar__left">
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
