import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label,Row,Form,Button, Container, FormText } from 'reactstrap';
import avatar from '../../DashComponents/assets/assets/avatar2.svg'
import sign from '../../DashComponents/assets/assets/download.png'
import '../../DashComponents/assets/styles/dash.scss'
import AadharSection from './aadharSection/AadharSection';


const Uprofile = () => {

    const [State, setState] = useState([]);
    const [City, setCity] = useState([]);
    const [cityToggle, setcityToggle] = useState(true);
    const [aadharverStatus, setaadharverfStatus] = useState(false);
    const [signImgsrc,setsignImgsrc] = useState("");
    const [avtrImgsrc,setavtrImgsrc] = useState("");
    


    //Profile body
    var formData = new FormData();

    // use the usestate for changing the formData

    const [uname, setuname] = useState("")
    const [uemail, setuemail] = useState("")
    const [pNumber, setpNumber] = useState("")
    const [udob, setudob] = useState("")
    const [uState, setuState] = useState("")
    const [uCity, setuCity] = useState("")
    const [uSignature, setuSignature] = useState([])
    const [uAadharno, setuAadharno] = useState("")
    const [uAvatar, setuAvatar] = useState([])
    const [aadharBody, setaadharBody] = useState([])


    const user =(event)=> {
        event.preventDefault();
        setuname(aadharBody.name.value);
        setuAadharno(aadharBody.no.value);
        setuemail(aadharBody.setuemail(localStorage.getItem("userEmail")));

        formData.append('uname',uname);
        formData.append('email',uemail);
        formData.append('phone_no',pNumber);
        formData.append('profile_image',uAvatar);
        formData.append('signature_image',uSignature);
        formData.append('dob',udob);
        formData.append('city_id',uCity);
        formData.append('Aadharno',uAadharno);

        for (const value of formData.values()) {
            console.log(value);
          }
    }
    // console.log(aadharBody);

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

    const showSign = (event) =>{ 
        setsignImgsrc(URL.createObjectURL(event));  
    }
    const showAvatar = (event) =>{ 
        setavtrImgsrc(URL.createObjectURL(event));  
    }
    

    useEffect(() => {

        // console.log(aadharverStatus);
        fetchState();
    }, [])
    




  return (
    <>

    {aadharverStatus === false && <AadharSection aadharverStatus={aadharverStatus} setaadharverfStatus={setaadharverfStatus} setaadharBody={setaadharBody}/>}
    {aadharverStatus === true && 
    <Container>
    <Form onSubmit={user}>
        <FormGroup row>
            <Col md={4}/>
            <Col md={4} className="text-center text-md-right">
            <Row className='justify-content-center'>
                <Col md='auto' > 
                {avtrImgsrc !== ""? <img className='profile_img' src={avtrImgsrc} alt='proof' id='img'/>:
                <img className='profile_img' src={avatar} alt='proof' id='img'/>
                }
                {/* <img className='profile_img' src={avatar} alt='proof' id='img'/>*/}
                </Col> 
                <Label row className="labelBlack" for="img">
                    Profile Picture
                </Label>
                <Col>
                <Label className="labelBlack" for="file">
                    Upload Picture
                    </Label>
                    <Input width={100}
                    id="file"
                    name="file"
                    type="file"
                    // onChange={(e)=>showAvatar(e.target.files[0])}
                    onChange={(e)=>{formData.append('profile_image',e.target.files[0]);setavtrImgsrc(URL.createObjectURL(e.target.files[0]));setuAvatar(e.target.files[0]);showAvatar(e.target.files[0])}}
                    />
                </Col>
            </Row>
           
        </Col>
        <Col md={4}/>
        </FormGroup>
        
            <Row>
            <Col md={4}>
                <FormGroup>
                    <Label className="labelBlack" for="name">
                    Name
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="name"
                    type="text"
                    // onChange={(e)=>(formData.append('uname',e.target.value))}
                    disabled
                    value={aadharBody.name.value}
                    />
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label className="labelBlack" for="exampleEmail">
                    Email
                    </Label>
                    <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="mail@mail.com"
                    type="email"
                    value={localStorage.getItem("userEmail")}
                    disabled
                    />
                    <FormText>
                        To change email Id kindly send email to admin@mail.com
                    </FormText>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label className="labelBlack" for="phone">
                    Phone number
                    </Label>
                    <Input
                    id="phone"
                    name="phone"
                    placeholder="phone number"
                    type="text"
                    onChange={(e)=>(setpNumber(e.target.value))}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col md={4}>
                <FormGroup>
                    <Label className="labelBlack" for="name">
                    D.O.B
                    </Label>
                    <Input
                    id="date"
                    name="date"
                    placeholder="date"
                    type="date"
                    onChange={(e)=>(setudob(e.target.value))}
                    />
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label
                        className="labelBlack"
                        for="exampleState"
                        sm={2}
                        >
                        State
                        </Label>
                        <Col sm={10}>
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
                        </Col>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label
                        className="labelBlack"
                        for="exampleCity"
                        sm={2}
                        >
                        City
                        </Label>
                        <Col sm={10}>
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
                        </Col>
                </FormGroup>
                </Col>
                
            </Row>
            <Row>
            <Col md={6}>
            <FormGroup>
                    <Label className="labelBlack" for="file">
                    Signature
                    </Label>
                    <Col md='auto' > 
                {signImgsrc !== "" && <img className='signature_img' src={signImgsrc} alt='proof' id='img'/>}
                </Col>
                    <Input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(e)=>{setuSignature(e.target.files[0]);setsignImgsrc(URL.createObjectURL(e.target.files[0]));showSign(e.target.files[0])}}
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label className="labelBlack" for="file">
                    Aadhar card
                    </Label>
                    <Input
                    id="aadharno"
                    name="aadharno"
                    placeholder="Aadhar Card Number"
                    disabled
                    value={aadharBody.no.value}
                    type="text"
                    onChange={(e)=>(setuAadharno(e.target.value))}
                    />
                </FormGroup>
                </Col>
            </Row>
            
            <Container style={{
              display:'flex',
              justifyContent:'center'
            }}>
                <Button className="text-center" type='submit' color='success'>
                  Update
                </Button>
            </Container>
        </Form>
        </Container>
        }
    </>
  )
}

export default Uprofile