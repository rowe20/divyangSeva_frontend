import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signIn.css'
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

  let navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword]= useState("")

 const user = {
  email:email,
  password:password
};

const authenticate = () =>{
  axios.post("http://localhost:8080/api/user/login",user)
  .then((res)=>{
    console.log(res.data.name);
    if(res.data.name !== 'NULL'){

      alert("welcome "+res.data.name);
      console.log(res.data);
      localStorage.setItem("name",res.data.name);
      navigate("/");
    }
    else{
      alert("Username or Password Invalid");
      setemail("");
      setpassword("");
    }
    
  })
}


  return (
    <Container >
    <Row>
      <Col xs="3" md='1'/>
      <Col xs="12" md='auto'>
          <Form>
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
              />
            </FormGroup>
            <Container style={{
              display:'flex',
              justifyContent:'center'
            }}>
                <Button className="text-center" onClick={authenticate} color='success'>
                  Login
                </Button>
            </Container>
            </Form>
          
      
      </Col>
      <Col xs="3" md='1'/>
    </Row>
  </Container>
  )
}

export default Login