import { useState } from 'react'
import Navbar from '../dashComponents/navbar/Navbar'
import Main from '../dashComponents/main/Main'
import Sidebar from '../dashComponents/sidebar/Sidebar'
import DashRequest from './dashboardPages/dashRequest'
import DashProfile from './dashboardPages/dashProfile'
const DashBoard = () => {

  const [sidebarOpen, setsidebarOpen] = useState(false);

  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  }


  return (
    <div className='containerD'>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      {/* <Main /> */}
      {/* <DashRequest/> */}
      <DashProfile/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  )
}

export default DashBoard