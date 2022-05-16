import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardText
  
  } from 'reactstrap'
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
      <Col xs="auto" md='auto' className='justify-content-center'>
      <Card
        body
        inverse
        style={{
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
        }}
      >
        <CardText className="text-center">
            Please enter your credentials
        </CardText>
        <CardBody>
        <Form>
          <FormGroup>
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
          <FormGroup>
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
              <Button onClick={authenticate} color='success'>
                Login
              </Button>
          </Form>
        </CardBody>
      </Card>
      
      </Col>
      <Col xs="3" md='1'/>
    </Row>
  </Container>
  )
}

export default Login