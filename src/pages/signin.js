import React, { useState } from 'react'
import Asidebar from '../components/Sidebar/Asidebar'
import Footer from '../components/Footer'
import SignInOutNav from '../components/Navbar/SignInOutNav'
import SignInOutHero from '../components/HeroSection/SignInOutHero'
import 'bootstrap/dist/css/bootstrap.min.css';



const SigninPage = () => {
  const [isOpen, setisOpen] = useState(false)


    const toggle = () =>{
        setisOpen(!isOpen)
        
    }
  return (
    <>
    <Asidebar isOpen={isOpen} toggle={toggle}/>
     <SignInOutNav toggle={toggle}/>
     <SignInOutHero/>
     
     <Footer/>
    </>
  )
}

export default SigninPage