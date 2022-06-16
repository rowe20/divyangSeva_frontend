import React, { useState } from 'react'
import Asidebar from '../components/Sidebar/Asidebar'
import Footer from '../components/Footer'
import SignInOutNav from '../components/Navbar/SignInOutNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorLoginHero from '../components/HeroSection/DoctorLoginHero'

const DoctorSignin = () => {
    const [isOpen, setisOpen] = useState(false)
    const [signStatus, setsignStatus] = useState("signin")


    const toggle = () =>{
        setisOpen(!isOpen)
        
    }
  return (
    <>
    <Asidebar isOpen={isOpen} toggle={toggle}/>
     <SignInOutNav toggle={toggle}/>
     <DoctorLoginHero signStatus={signStatus} setsignStatus={setsignStatus}/>
     
     <Footer/>
    </>
  )
}

export default DoctorSignin