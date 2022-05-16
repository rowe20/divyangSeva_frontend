import "./UdashCss.css";
import hello from "../../../dashComponents/assets/hello.svg";
import { Badge, Button, Card, CardText, CardTitle, List, Progress } from "reactstrap";
import {FaThumbsDown,FaThumbsUp} from 'react-icons/fa'
import { useState } from "react";


const UdashboardContent = () => {
const [certiAppliedstatus, setcertiAppliedstatus] = useState(false)

  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello User</h1>
            <p>Welcome to your dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Certificate Applied Online</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Something</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Something</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Something</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- ReportS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Applied Requests Status</h1>
                <p>Check Your Certifcate Status</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <hr/>
            <strong>
            Status of Your Certifcate.
            </strong>
            <br/>
            <CertiStatus/>

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
            <hr/>
            <Card
              body
              className="text-center"
            >
              <CardTitle tag="h5">
                Not Applied
              </CardTitle>
              <CardText>
                You Haven't Applied for Disability Certificate.
              </CardText>
              <Button>
                Apply Now
              </Button>
            </Card>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>News</h1>
                <p>Top Latest News</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              {/* <div className="card1">
                <h1>Completed</h1>
                <p>10</p>
              </div>

              <div className="card2">
                <h1>Pending</h1>
                <p>0</p>
              </div>

              <div className="card3">
                <h1>Rejected</h1>
                <p>3</p>
              </div> */}

              {/* <div className="card4">
                <h1></h1>
                <p>1881</p>
              </div> */}
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default UdashboardContent;



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

