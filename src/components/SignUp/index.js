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
    Button
    } from 'reactstrap'

const SignUp = () => {

    const navigate = useNavigate();

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const [phone_no, setphoneno] = useState("")
    
    
    
    
    const user = {
      uname:name,
      email:email,
      password:password,
      phone_no:phone_no,
      city:{
            id:"1"
           }
     }
    
    
    const register = async(event) =>{
    event.preventDefault();
    console.log(user);
    
    try{
      //working one
      //do uploading here
      await axios.post("http://localhost:8080/api/user/add",user).then((res)=> {
          console.log(res.data);
          alert(res.data);
          navigate("/login");
        })
      }
      catch(err)
      {
        alert("user registration failed");
      }
    
    }

  return (
    <Container>
      <Row>
        <Col xs="3" md="1"/>
        <Col xs="12" md="auto">
          <Form onSubmit={register}>
          <FormGroup>
              <Label for="name">
                Name
              </Label>
              <Input
                id="name"
                name="name" 
                placeholder="Enter Full name"
                type="text"
                value={name}
                 onChange={(e)=>setname(e.target.value)}
                 required
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">
                Phone No
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Phone number"
                type="text"
                value={phone_no}
                 onChange={(e)=>setphoneno(e.target.value)}
                 required
              />
            </FormGroup>
            <FormGroup>
              <Label for="Email">
                Email
              </Label>
              <Input
                id="Email"
                name="email"
                placeholder="Enter email"
                type="email"
                value={email} 
                onChange={(e)=>setemail(e.target.value)}
                required
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
                 required
              />
            </FormGroup>
                <Button type='submit'>
                  Register
                </Button>
            </Form>
          
       
        
        </Col>
        <Col xs="3"/>
      </Row>
    </Container>
  )
}

export default SignUp