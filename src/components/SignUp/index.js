import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { SignContext } from '../../context/SignContext'
import { Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    InputGroup,
    InputGroupText
    } from 'reactstrap'

const SignUp = () => {

    const navigate = useNavigate();

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const [phone_no, setphoneno] = useState("")
    const [uState, setuState] = useState("")
    const [uCity, setuCity] = useState("")

    const [State, setState] = useState([]);
    const [City, setCity] = useState([]);
    const [cityToggle, setcityToggle] = useState(true);

    //show FOrm 
    const [phoneBtnstatus, setphoneBtnstatus] = useState(false)
    const [emailComstatus, setemailComstatus] = useState(true)
    const [emailBtnstatus, setemailBtnstatus] = useState(true)
    const [otherComstatus, setotherComstatus] = useState(true)
    
    
    const verifyPhoneNo = () =>{
      // if(phone_no === verified)
      //add toast
      setTimeout(()=>{
      setphoneBtnstatus(true);
      setemailComstatus(false);
      setemailBtnstatus(false);
        },3000);
      
    }
    const verifyEmail = () =>{
      // if(email === verified)
      //add toast
      setTimeout(()=>{
      setemailBtnstatus(true);
      setotherComstatus(false);
        },3000);
      
    }


    const user = {
      uname:name,
      email:email,
      password:password,
      phone_no:phone_no,
      city:{
        id:uCity
      },
      roles:["USER"]
     }
    
     
    const signStatuscheck = useContext(SignContext);

     const fetchState = async() =>{
      await axios.get("http://localhost:8080/api/state/list")
      .then((res)=>{
          console.log(res.data);
          setState(res.data);
      })
  }

  const fetchCity = async(stateName) => {
      console.log(stateName);
      setuState(stateName);
      await axios.get("http://localhost:8080/api/city/list_by_state/"+stateName)
      .then((res)=>{
          console.log(res.data);
          setCity(res.data);
          setcityToggle(false);
      })
  }

    
    const register = async(event) =>{
    event.preventDefault();

    await axios.post("http://localhost:8080/api/user/add",user)
    .then((res)=>{
          toast.success(res.data,{
            position:toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000,
            transition:Zoom,
          })
            setTimeout(()=>{
              signStatuscheck.setsignStatus("signin");
    
              },3000);
          }).catch((error) => {

        toast.error(error.response.data,{
                position:toast.POSITION.BOTTOM_CENTER,
                autoClose: 2000,
                transition:Zoom,
              })
    })

    }

    useEffect(() => {

      // console.log(aadharverStatus);
      fetchState();
  }, [])

  return (
    <>
    <ToastContainer
      draggable={false}
      transition={Zoom}
      autoClose={2000}
    />
    <Container>
      <Row>
        <Col xs="3" md="1"/>
        <Col xs="12" md="10">
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
              <InputGroup>
                <InputGroupText>
                  +91
                </InputGroupText>
              <Input
                id="phone"
                name="phone"
                placeholder="Phone number"
                type="text"
                maxLength={10}
                minLength={10}
                value={phone_no}
                 onChange={(e)=>setphoneno(e.target.value)}
                 required
              />
              </InputGroup>
              
              <Container hidden={phoneBtnstatus} style={{
                display:'flex',
                justifyContent:'center',
                paddingTop: '10px'
                
              }}>
                <Button type='button' color='primary' onClick={verifyPhoneNo}>
                  Verify Phone No
                </Button>
                </Container>
            </FormGroup>
            <FormGroup hidden={emailComstatus}>
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
              
              <Container hidden={emailBtnstatus} style={{
                display:'flex',
                justifyContent:'center',
                paddingTop: '10px'
                
              }}>
                <Button type='button' color='primary' onClick={verifyEmail}>
                  Verify Email
                </Button>
                </Container>
            </FormGroup>
            <FormGroup hidden={otherComstatus}>
                    <Label
                        for="exampleState">
                        State
                        </Label>
                        <Input
                            id="exampleState"
                            name="state"
                            type="select"
                            onChange={(e)=>fetchCity(e.target.value)}
                        >
                            <option>
                            Select State
                            </option>
                            {State.map((states,index)=>
                                <option key={index} value={states.state_name}>
                                {states.state_name}
                                </option>
                            )}
                            
                        </Input>
                </FormGroup>
            <FormGroup hidden={otherComstatus}>
                <Label
                    for="exampleCity"
                    >
                    City
                    </Label>
                    <Input
                        id="exampleCity"
                        name="city"
                        type="select"
                        disabled={cityToggle}
                        onChange={(e)=>(setuCity(e.target.value))}
                    >
                        <option>
                        Select City
                        </option>
                        {City.map((city,index)=>
                            <option key={city.id} value={city.id}>
                            {city.city_name}
                            </option>
                        )}
                        
                    </Input>
            </FormGroup>
            <FormGroup hidden={otherComstatus}>
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
              <Container hidden={otherComstatus} style={{
                display:'flex',
                justifyContent:'center'
                
              }}>
                <Button type='submit' color='primary'>
                  Register
                </Button>
                </Container>
            </Form>
          
       
        
        </Col>
        <Col xs="3"/>
      </Row>
    </Container>
    </>
  )
}

export default SignUp