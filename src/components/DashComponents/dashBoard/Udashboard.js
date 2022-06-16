import React from 'react'
import { Badge, Button, Card, CardText, CardTitle, List, Progress } from "reactstrap";
import {FaThumbsUp,FaThumbsDown,FaShoppingCart,FaArrowUp} from 'react-icons/fa'
import '../assets/styles/dash.scss'
const Udashboard = () => {
  return (
    <>
    <main>
      <section class="wrapper">
        <div class="container">
  
            <div class="row">
                <div class="col-md-8">
                    <div class="card text-white card-has-bg click-col">
                        <img class="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"/>
                        <div class="card-img-overlay d-flex flex-column">
                            <div class="card-body">
                                <small class="card-meta mb-2">Applied Requests Status</small>
                                <h4 class="card-title mt-0 text-white ">Check Your Certifcate Status</h4>
                                <small><i class="far fa-clock"></i> October 15, 2020</small>
                                <br/>
                                <List type="unstyled">
                                    <li>
                                        Certifcate Applied &nbsp; <Badge color="success" title="Success"><FaThumbsUp/></Badge>
                                    </li>
                                    <li>
                                        Doctor Verified  &nbsp; <Badge color="success" title="Success"><FaThumbsUp/></Badge>
                                    </li>
                                    <li>
                                        Police Verified  &nbsp; <Badge color="danger" title="Pending"><FaThumbsDown/></Badge>
                                    </li>
                                    <li>
                                        Railway Officer Verified  &nbsp; <Badge color="danger" title="Pending"><FaThumbsDown/></Badge>
                                    </li>
                                </List>
                                <br/>
                                <CertiStatus/>
                            </div>
                            <div class="card-footer">
                                <Button color="dark">
                                    Check status
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </section>
    </main>
    </>
  )
}

export default Udashboard


const CertiStatus = () => {
    return (
      <>
          <Progress
              animated
              color="success"
              value="50"
          />
      </>
    )
  }