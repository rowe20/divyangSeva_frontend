import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate,Redirect } from 'react-router-dom';
import './signIn.css'
import { SignContext } from '../../context/SignContext'
import { UserRoleContext } from '../../context/UserRoleContext';
import { DashboardNavbarContext } from '../../context/DashboardNavbarContext';
import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  
  } from 'reactstrap'
import SignInOutHero from '../HeroSection/SignInOutHero';




const Login = () => {

  const signstatusCheck = useContext(SignContext);
  const userRoleStatus = useContext(UserRoleContext);
  const dashboardNavbar = useContext(DashboardNavbarContext);
  const navigate = useNavigate();
  
  const [email, setemail] = useState("")
  const [password, setpassword]= useState("")

 const user = {
  email:email,
  password:password
};

const authenticate = async(e) =>{
    e.preventDefault();
    
    await axios.post("http://localhost:8080/api/user/login",user)
    .then((res)=>{
      // console.log(res.data);
      if(res.status === 200){

        if(res.data.user_type === ("Police"))
        {
          localStorage.setItem("userRole","admin");
          localStorage.setItem("signStatus","loggedin")
          signstatusCheck.setsignStatus("loggedin")
          userRoleStatus.setuserRole("admin");
        }
        else if (res.data.user_type ==="USER")
        {
          toast.success(res.data.message,{
            position:toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000,
            transition:Zoom,
          });
          localStorage.setItem("userRole","user");
          localStorage.setItem("userName",res.data.name);
          localStorage.setItem("userEmail",res.data.email);
          localStorage.setItem("userToken",res.data.token);
          userRoleStatus.setuserRole("user");

          setTimeout(()=>{
          localStorage.setItem("signStatus","loggedin");
          signstatusCheck.setsignStatus("loggedin");
          navigate("/dashboard");

          },3000);
          
        }
        else{
          toast.warning("Wrong Username or Password",{
            position:toast.POSITION.BOTTOM_CENTER
          });
          setemail("");
          setpassword("");
        }
      }
      else{
        toast.warning("Something went wrong please try again later!",{
          position:toast.POSITION.BOTTOM_CENTER
        });
        setemail("");
        setpassword("");
      }
    })
}


  return (
    <>
    <ToastContainer
      draggable={false}
      transition={Zoom}
      autoClose={2000}
    />
    <Container >
    <Row>
      <Col xs="3" md='1'/>
      <Col xs="12" md='auto'>
          <Form onSubmit={authenticate}>
            <FormGroup className="text-center">
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                id="Email"
                name="email"
                placeholder="email"
                type="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup className="text-center">
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                required
              />
            </FormGroup>
            <Container style={{
              display:'flex',
              justifyContent:'center'
            }}>
                <Button className="text-center" type='submit' color='success'>
                  Login
                </Button>
            </Container>
            </Form>
          
      
      </Col>
      <Col xs="3" md='1'/>
    </Row>
  </Container>
  </>
  )
}

export default Login