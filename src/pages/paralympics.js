import React, { useState } from 'react'
import ParalymHeroElement from '../components/HeroSection/ParalymHeroElement';
import ParalymInfoSection from '../components/InfoSection/ParalymInfoSection';
import ParalymNav from '../components/Navbar/ParalymNav';
import Asidebar from '../components/Sidebar/Asidebar';
import Footer from '../components/Footer'
import './../../src/App.css';

const Paralympics = () => {
  const [isOpen, setisOpen] = useState(false)

    const toggle = () =>{
        setisOpen(!isOpen)
    }
  return (
    <>
    <Asidebar isOpen={isOpen} toggle={toggle}/>
    <ParalymNav toggle={toggle}/>
    <ParalymHeroElement/>
    <ParalymInfoSection/>
    <Footer/>
    </>
  )
}

export default Paralympics