import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import SignInOutNav from '../components/Navbar/SignInOutNav'
import SignInOutHero from '../components/HeroSection/SignInOutHero'
import 'bootstrap/dist/css/bootstrap.min.css';


const SignupPage = () => {
  const [isOpen, setisOpen] = useState(false)

    const toggle = () =>{
        setisOpen(!isOpen)
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
     <SignInOutNav toggle={toggle}/>
     <SignInOutHero/>
     
     <Footer/>
    </>
  )
}

export default SignupPage