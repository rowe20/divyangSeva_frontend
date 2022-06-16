import React, { useContext, useEffect } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, } from 'react-icons/fa';
import { MdSpaceDashboard,MdPerson } from 'react-icons/md';
import { BsNewspaper } from 'react-icons/bs';
import { GoSignOut } from 'react-icons/go';
import sidebarBg from '../assets/assets/bg2.jpg';
import { DashboardNavbarContext } from '../../../context/DashboardNavbarContext';
import { DashboardCurrentNavContext } from '../../../context/DashboardCurrentNavContext';
import { UserRoleContext } from '../../../context/UserRoleContext';



const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const DashboardNavbar = useContext(DashboardNavbarContext);
  const userRoleStatus = useContext(UserRoleContext);
  const currentnav = useContext(DashboardCurrentNavContext);
  const icon = [<MdSpaceDashboard />,<MdPerson/>,<BsNewspaper/>,<GoSignOut/>];

useEffect(() => {
  
  if(userRoleStatus.userRole === "")
  {
    console.log("went for changing");
    if(localStorage.getItem('userRole') === 'user'){
      userRoleStatus.setuserRole("user");
      DashboardNavbar.setdashboardNavbar(prevNav => [...prevNav, 'Dashboard','Profile','Apply Certificate','Logout']);
    }
    else if(localStorage.getItem('userRole') === 'admin'){
      userRoleStatus.setuserRole("admin");
      DashboardNavbar.setdashboardNavbar(prevNav => [...prevNav, 'Dashboard','Profile','Verify Certificate','Completed Certificate','Logout']);

    }
  }
  else if(userRoleStatus.userRole === "user" && DashboardNavbar.dashboardNavbar.length === 0)
  {
      DashboardNavbar.setdashboardNavbar(prevNav => [...prevNav, 'Dashboard','Profile','Apply Certificate','Logout']);
  }
  else if(userRoleStatus.userRole === "admin")
  {
    DashboardNavbar.setdashboardNavbar(prevNav => [...prevNav, 'Dashboard','Profile','Verify Certificate','Completed Certificate','Logout']);
  }
}, [])


  return (
    <>
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Title
        </div>
      </SidebarHeader>

      <SidebarContent>
        {DashboardNavbar.dashboardNavbar.map((navbar,index)=>(
          <Menu iconShape="circle" key={index}>
          <MenuItem
            icon={icon[index]}
            onClick={()=>{currentnav.setcurrentNav(navbar)}}
            // suffix={<span className="badge red">New</span>}
          >
            {navbar}
          </MenuItem>
         </Menu>
         ))}
        
        {/* <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title='With Suffix'
            icon={<FaRegLaughWink />}
          >
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title='with prefix'
            icon={<FaHeart />}
          >
            <MenuItem>submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title='multilevel' icon={<FaList />}>
            <MenuItem>submenu 1 </MenuItem>
            <MenuItem>submenu 2 </MenuItem>
            <SubMenu title={`$submenu 3`}>
              <MenuItem>submenu 3.1 </MenuItem>
              <MenuItem>submenu 3.2 </MenuItem>
              <SubMenu title={`$submenu 3.3`}>
                <MenuItem>submenu 3.3.1 </MenuItem>
                <MenuItem>submenu 3.3.2 </MenuItem>
                <MenuItem>submenu 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu> */}
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            view source
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
    </>
  )
}

export default Aside