import React from 'react'
import { Col, Container, Row, Table,Button, Form, FormGroup, Label, Input } from 'reactstrap';
import hello from "../../dashComponents/assets/hello.svg";
import './dashboard.css'
import avatar from '../../assets/trialImg/12.jpeg'
import {FaEye} from 'react-icons/fa'
const DashRequest = () => {
  return (
    <main>
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Request</h1>
            <p>Here are your request</p>
          </div>
        </div>

        <Container>
            <Row>
                <Col md='2' />
                <Col md='8'>
                <Table
                    borderless
                    dark
                    hover
                    responsive
                    striped
                    
                    >
                    <thead>
                        <tr>
                            <th>
                                Task No
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Document Submitted
                            </th>
                            <th>
                                Doctor Verified
                            </th>
                            <th>
                                Police Verified
                            </th>
                            <th>
                                View
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                        <Button
                            color="primary"
                        ><FaEye/></Button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                        <Button
                            color="primary"
                        ><FaEye/></Button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td>
                        <Button
                            color="primary"
                        ><FaEye/></Button>
                        </td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
                <Col md='2' />
            </Row>
        </Container>

        <Container>
            <Row>
                <Col md='2'></Col>
                <Col md='auto' className="text-center text-md-right">
                    <h3>Verify Details</h3>
                    <p>Click on above view button to fill up this empty boxes</p>
                    <hr/>
                    <br/>
                    <Form>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="name">
                                Name
                                </Label>
                                <Input
                                id="name"
                                name="name"
                                placeholder="Divyang User's Name"
                                type="text"
                                disabled
                                />
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                            <Label for="Email">
                                Email
                                </Label>
                                <Input
                                id="Email"
                                name="email"
                                placeholder="User's Email"
                                type="email"
                                disabled
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}/>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="exampleAddress">
                                Doctor Verification Status
                                </Label>
                                <Input valid
                                id="status"
                                name="status"
                                placeholder="Verified"
                                disabled
                                />
                            </FormGroup>
                            </Col>
                            <Col md={4}/> 
                            
                        </Row>
                        
                        <Row>
                            <Col md={2}/>
                            <Col md='auto'>
                            <FormGroup>
                                <Label for="img">
                                Submitted Proofs
                                </Label>
                                <img className='disable_img' src={avatar} alt='proof' id='img'/>
                            </FormGroup>
                            </Col>
                            <Col md={2}/> 
                            
                        </Row>
                        <Row>
                            <Col md={4}/>
                            
                            <Col md={'auto'}>
                            <FormGroup row>
                                <Label
                                for="exampleSelectMulti"
                                sm={4}
                                >
                                Police Verification
                                </Label>
                                <Col sm={8}>
                                <Input
                                    id="exampleSelectMulti"
                                    
                                    name="selectMulti"
                                    type="select"
                                >
                                    <option>
                                    Pending
                                    </option>
                                    <option>
                                    Rejected
                                    </option>
                                    <option>
                                    Approved
                                    </option>
                                </Input>
                                </Col>
                            </FormGroup>
                            </Col>
                            <Col md={4}/>                          
                        </Row>
                        <FormGroup row>
                                <Label
                                for="exampleText"
                                sm={2}
                                >
                                Reason If Any
                                </Label>
                                <Col sm={10}>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
                                />
                                </Col>
                            </FormGroup>
                        
                        <Button>
                            Submit
                        </Button>
                        </Form>
                
                </Col>
                <Col md='2'></Col>
            </Row>
        </Container>
        <br/>
    </main>
  )
}

export default DashRequest