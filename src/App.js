
import React,{ useState } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import { SignContext } from './context/SignContext';
import Home from './pages';
import Dashboard from './pages/dashBoard';
import UserDashBoard from './pages/dashboardPages/userDashboardPages/userDashboard';
import SigninPage from './pages/signin';


function App() {
  //for signup or signin reusable component
  const [signStatus, setsignStatus] = useState("");


  return (
    <Router>
      <SignContext.Provider value={{
          signStatus,setsignStatus
        }}>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdashboard" element={<UserDashBoard />} />
      </Routes>
      </SignContext.Provider>
    </Router>
  );
}

export default App;
