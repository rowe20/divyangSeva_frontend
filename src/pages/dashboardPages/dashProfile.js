import React from 'react'
import { Col, FormGroup, Input, Label,Row,Form,Button, Container, FormText } from 'reactstrap';
import profile from "../../dashComponents/assets/profile.svg";
import avatar from "../../dashComponents/assets/avatar2.svg";
import sign from "../../dashComponents/assets/download.png";
import './dashboard.css'

const DashProfile = () => {
  return (
    <main>
        <div className="main__title">
          <img src={profile} alt="hello" />
          <div className="main__greeting">
            <h1>Profile</h1>
            <p>Your Personal Info</p>
          </div>
        </div>
        <hr/>


        <Container>
        
        <FormGroup row>
            <Col md={4}/>
            <Col md={4} className="text-center text-md-right">
            <Row className='justify-content-center'>
                <Col md='auto' > 
                <img className='profile_img' src={avatar} alt='proof' id='img'/></Col>
                <Label row for="img">
                    Profile Picture
                </Label>
                <Col>
                <Label for="file">
                    Upload Picture
                    </Label>
                    <Input width={100}
                    id="file"
                    name="file"
                    type="file"
                    />
                </Col>
            </Row>
           
        </Col>
        <Col md={4}/>
        </FormGroup>
        <Form>
            <Row>
            <Col md={4}>
                <FormGroup>
                    <Label for="name">
                    Name
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="name"
                    type="text"
                    />
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label for="exampleEmail">
                    Email
                    </Label>
                    <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="mail@mail.com"
                    type="email"
                    disabled
                    />
                    <FormText>
                        To change email Id kindly send email to admin@mail.com
                    </FormText>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label for="phone">
                    Phone number
                    </Label>
                    <Input
                    id="phone"
                    name="phone"
                    placeholder="phone number"
                    type="text"
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col md={4}>
                <FormGroup>
                    <Label for="name">
                    D.O.B
                    </Label>
                    <Input
                    id="date"
                    name="date"
                    placeholder="date"
                    type="date"
                    />
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label
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
                        >
                            <option>
                            Surat
                            </option>
                            <option>
                            2
                            </option>
                            <option>
                            3
                            </option>
                            <option>
                            4
                            </option>
                            <option>
                            5
                            </option>
                        </Input>
                        </Col>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label
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
                        >
                            <option>
                            Gujarat
                            </option>
                            <option>
                            2
                            </option>
                            <option>
                            3
                            </option>
                            <option>
                            4
                            </option>
                            <option>
                            5
                            </option>
                        </Input>
                        </Col>
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col md={6}>
                <FormGroup>
                    <Label for="organisationname">
                    Organisation name
                    </Label>
                    <Input
                    id="organisationname"
                    name="organisationname"
                    placeholder="organisationname"
                    type="text"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="file">
                    Signature
                    </Label>
                    <Col md='auto' > 
                <img className='signature_img' src={sign} alt='proof' id='img'/></Col>
                    <Input
                    id="file"
                    name="file"
                    
                    type="file"
                    />
                </FormGroup>
                </Col>
            </Row>
            
            <Button>
                Update
            </Button>
        </Form>
        </Container>
    </main>
  )
}

export default DashProfile