
import React,{ useState } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import { DashboardNavbarContext } from './context/DashboardNavbarContext';
import { SignContext } from './context/SignContext';
import { UserRoleContext } from './context/UserRoleContext';
import { DashboardCurrentNavContext } from './context/DashboardCurrentNavContext';
import Home from './pages';
import Dashboard from './pages/DashboardPages/Home';
import Paralympics from './pages/paralympics';
import SigninPage from './pages/signin';
import Error from './pages/error';
import DoctorSignin from './pages/doctorSignin';


function App() {
  //for signup or signin reusable component
  const [signStatus, setsignStatus] = useState("");
  const [userRole, setuserRole] = useState("");
  const [currentNav, setcurrentNav] = useState("Dashboard");
  const [dashboardNavbar, setdashboardNavbar] = useState([]);



  return (
    <Router>
      <SignContext.Provider value={{
          signStatus,setsignStatus
        }}>
          <UserRoleContext.Provider value={{
            userRole,setuserRole
          }}>
            <DashboardNavbarContext.Provider value={{
              dashboardNavbar,setdashboardNavbar
            }}>
              <DashboardCurrentNavContext.Provider value={{
                currentNav,setcurrentNav
              }}>
              <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path="/paralympics" element={<Paralympics/>}/>
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/error" element={<Error/>} />
                {/* //admin users */}
                <Route path="/doctor" element={<DoctorSignin />} />
                {/* User Dashboard */}
                {/* <Route path="/userdashboard" element={<UserDashBoard />} /> */}
              </Routes>
              </DashboardCurrentNavContext.Provider>
            </DashboardNavbarContext.Provider>
          </UserRoleContext.Provider>
      </SignContext.Provider>
    </Router>
  );
}

export default App;
