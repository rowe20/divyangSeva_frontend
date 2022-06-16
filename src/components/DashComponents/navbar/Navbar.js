import React, { useState } from 'react'
import '../../DashComponents/assets/styles/App.scss'
import Aside from './Aside'
import Main from './Main';
const Navbar = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };


  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
    <Aside
    image={image}
    collapsed={collapsed}
    toggled={toggled}
    handleToggleSidebar={handleToggleSidebar}
    />
    <Main
      image={image}
      toggled={toggled}
      collapsed={collapsed}
      handleToggleSidebar={handleToggleSidebar}
      handleCollapsedChange={handleCollapsedChange}
      handleImageChange={handleImageChange}
      />
    
    </div>
  )
}

export default Navbar