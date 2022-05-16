import { Col, FormGroup, Input, Label,Row,Form,Button, Container, FormText, UncontrolledAlert } from 'reactstrap';
import certi from "../../../dashComponents/assets/certi.svg";
import avatar from "../../../dashComponents/assets/avatar2.svg";
import sign from "../../../dashComponents/assets/download.png";

const Ucertificate = () => {
  return (
    <main>
        <div className="main__title">
          <img src={certi} alt="hello" />
          
          <div className="main__greeting">
            <h1>Differently-Abled Certificate</h1>
            <p>Your Personal Disability Certificate</p>
          </div>
        </div>
        <hr/>


        <Container>
        <UncontrolledAlert color="info">
           Make Sure You Complete Your Profile Before You Apply For Certificate
        </UncontrolledAlert>
        <br/>
        <FormGroup row>
            <Col md={4}/>
            <Col md={4} className="text-center text-md-right">
            <Row className='justify-content-center'>
                <Col md='auto' > 
                <img className='profile_img' src={avatar} alt='proof' id='img'/></Col>
                <Label row for="img">
                    Profile Picture
                </Label>
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
                    placeholder="Sudhi Kumar"
                    type="text"
                    disabled
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
                    placeholder="Sudhi@gmail.com"
                    type="email"
                    disabled
                    />
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
                    placeholder="(+91)9999999999"
                    type="text"
                    disabled
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
                    value={'1998-07-22'}
                    type="date"
                    disabled
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
                            type="text"
                            placeholder='Surat'
                            disabled
                        >
                          
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
                            type="text"
                            placeholder='Gujarat'
                            disabled
                        >
                        </Input>
                        </Col>
                </FormGroup>
                </Col>
            </Row>
            <Row>
            {/* <Col md={6}/> */}
                <Col md={'auto'}>
                <FormGroup>
                    <Label for="file">
                    Signature
                    </Label>
                    <Col md='auto' > 
                <img className='signature_img' src={sign} alt='proof' id='img'/></Col>
                    
                </FormGroup>
                </Col>
            </Row>
        </Form>
        <Form>
            <Row>
            <Col md={4}>
            <FormGroup>
                    <Label
                        for="exampleCity"
                        sm={4}
                        >
                        Disability Type
                        </Label>
                        <Col sm={8}>
                        <Input
                            id="exampleCity"
                            name="city"
                            type="select"
                        >
                            <option>
                            Select Disability Type
                            </option>
                            <option>
                            Locomoter
                            </option>
                            <option>
                            Atherisits
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
                    <Label for="dtype">
                    Disability percentage
                    </Label>
                    <Input
                    id="dtype"
                    name="dtype"
                    placeholder="disability %"
                    type="text"
                    
                    />
                    <FormText>
                        This may change as per doctor's perspective or let doctor allocate for you.
                    </FormText>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label for="phone">
                        Disability Proof
                        </Label>
                        <Col md='auto' > 
                        {/* <img className='signature_img' src={sign} alt='proof' id='img'/> */}
                        </Col>
                        <Input
                        id="file"
                        name="file"
                        type="file"
                        />
                        <FormText>
                        Upload a proof of you with that disability.
                        </FormText>
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <Col md={4}/>
            <Col md={4}>
                <legend className="col-form-label col-sm-12">
                Do You Need Railway Concession ?
                </legend>
                <Col sm={3}>
                <FormGroup check>
                    <Input
                    name="radio2"
                    type="radio"
                    />
                    {' '}
                    <Label check>
                    Yes
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                    name="radio2"
                    type="radio"
                    />
                    {' '}
                    <Label check>
                    No
                    </Label>
                </FormGroup>
                </Col>
                
            </Col>
            <Col md={4}/>
            </Row>
            <br/>
            <Row>
                <Col md='4'/>
                <Col>
                <Button>
                    Apply
                </Button>
                </Col>
                <Col md='4'/>
            </Row>
            <br/>
        </Form>
        </Container>
    </main>
  )
}

export default Ucertificate