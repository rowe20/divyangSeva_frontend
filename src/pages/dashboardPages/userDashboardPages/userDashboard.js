import { useState } from 'react'
import Navbar from '../../../dashComponents/navbar/Navbar'

import Sidebar from '../../../dashComponents/sidebar/Sidebar'
import Ucertificate from './Ucertificate';
import UdashboardContent from './UdashboardContent';
import Uprofile from './Uprofile';

const UserDashBoard = () => {

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
        <UdashboardContent/>
        {/* <Uprofile/> */}
        {/* <Ucertificate/> */}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  )
}

export default UserDashBoard