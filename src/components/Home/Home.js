import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import avatar1 from "../../images/avtar3.jpg";
import avatar2 from "../../images/avatar4.jpg";
import "../Home/home.css";
import { RxDotFilled } from "react-icons/rx";
import { FaArrowAltCircleLeft, FaSearch } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { GrSend } from "react-icons/gr";
import Chat from "../Conversation/Conversation";
import Members from "../Members/Members";
import { Link } from "react-router-dom";
const Home = () => {
  const [show, setShow] = useState(false);
const [data , setData] = useState({name:"User", img:avatar1});

const saveData = (value)=>{
setData(value);
console.log(value);
}
  let w  = window.innerWidth;
  console.log(w);
  return (
    <div>
      <Container fluid className="py-5" style={{ backgroundColor: "#eee" }}>
        <Row>
          <Col md="6" lg="5" xl="4" sm="12" className="mb-4 mb-md-0 ">
          <div className="members position-fixed"  style={{
                display:w <= 414? show? "none": "block" : "block"
                }}>
              <Card>
                {/* <h5 className="font-weight-bold mb-3 text-center text-lg-start">
            Member
          </h5> */}
                <Card.Body>
                  <ListGroupItem  className="mb-0">
                    <li>
                      <div className="input-group form-sm form-1 pl-0 mb-4">
                        <div className="input-group-prepend py-2">
                          <span
                            className="input-group-text purple lighten-3"
                            id="basic-text1"
                          >
                            <FaSearch className="" icon="search" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search or start a new chat"
                          aria-label="Search"
                        />
                      </div>
                    </li>
                    <li className="p-2" style={{ backgroundColor: "#eee" }} onClick={() => {setShow(!show)
                    saveData({name:"Lee min hoo", img:avatar1})
                    }}>
                      <a
                        href="#!"
                        className="d-flex justify-content-between text-decoration-none"
                      >
                        <div className="d-flex flex-row">
                          <div className="avatar-img">
                            <img
                              src={avatar1}
                              alt="avatar"
                              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            />
                          </div>
                          <div className="user-name">
                            <p className=" mb-0">Lee Min hoo</p>
                            {/* <p className="small text-muted">
                          Hello, Are you there?
                        </p> */}
                          </div>
                        </div>
                        <div className="online">
                          <RxDotFilled color="#008000" />
                          {/* <p className="small text-muted mb-1">Just now</p>
                      <span className="badge bg-danger float-end">1</span> */}
                        </div>
                      </a>
                    </li>
                    <li className="p-2" onClick={() => {setShow(!show)
                    saveData({name:"ShadabKhan", img:avatar2})
                    }}>
                      <a
                        href="#!"
                        className="d-flex justify-content-between text-decoration-none"
                      >
                        <div className="d-flex flex-row">
                          <span className="avatar-img">
                            <img
                              src={avatar2}
                              alt="avatar"
                              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            />
                          </span>
                          <div className="user-name">
                            <p className=" mb-0">Shadab Khan</p>
                            {/* <p className="small text-muted">
                          Hello, Are you there?
                        </p> */}
                          </div>
                        </div>
                        <div className="online">
                          <RxDotFilled color="#008000" />
                          {/* <p className="small text-muted mb-1">Just now</p>
                      <span className="badge bg-danger float-end">1</span> */}
                        </div>
                      </a>
                    </li>
                  </ListGroupItem>
                </Card.Body>
              </Card>
        </div>
            {/* <Members /> */}
          </Col>

          <Col md="6" lg="7" xl="8" sm="12">
          <div className="user-chat position-fixed"  style={{
                display:w <= 414? show? "block" : "none":"block"
                }}>
              <ListGroupItem>
             
                <li className="p-2 user">
                  <a
                    href="#!"
                    className="d-flex justify-content-between text-decoration-none"
                  >
                     <Button style={{
                        display:w <= 414? show? "block" : "none"  :"none"
                        }} onClick={() => setShow(!show)} className="left-btn">
                  <FaArrowAltCircleLeft className="arrow-left" />
                </Button>
                    <div className="d-flex flex-row">
                        
                      <span className="avatar-img">
                        <img
                          src={data.img? data.img : avatar1}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        />
                      </span>
                      <div className="user-name">
                        <p className="mb-0">{data.name}</p>
                        {/* <p className="small text-muted">
                            Hello, Are you there?
                            </p> */}
                      </div>
                    </div>
                    <div className="online">
                      <span className="feature1">
                        <Button>
                          <BsTelephone />
                        </Button>
                      </span>
                      <span className="feature2">
                        <Button>
                          <BsCameraVideo />
                        </Button>
                      </span>
                      {/* <p className="small text-muted mb-1">Just now</p>
                        <span className="badge bg-danger float-end">1</span> */}
                    </div>
                  </a>
                </li>
                {/* chatbox */}
                <div className="chat-box py-3 px-3">
                  <div>
                    <li className="d-flex justify-content-end align-items-center mb-2 user1">
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
               <p className="fw-bold mb-0">Lara Croft</p>
               <p className="text-muted small mb-0">
               </p>
             </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">hello</p>
                        </Card.Body>
                        {/* <Card.Footer>
           
               
             </Card.Footer> */}
                      </Card>

                      <span className="avatar-img">
                        <img
                          src={avatar2}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                    </li>
                    <p className="text-muted small text-end mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>

                  <div>
                    <li className="d-flex justify-content-start mb-2 user2">
                      <span className="avatar-img avtar-img2">
                     
                        <img
                          src={avatar1}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                   
                  </p>
                </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </Card.Body>
                        {/* <Card.Footer>
                <p className="text-muted small mb-0">
                28/12/2022 9:18 AM
                  </p>
                  
                </Card.Footer> */}
                      </Card>
                    </li>
                    <p className="text-muted small text-start mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>

                  <div>
                    <li className="d-flex justify-content-end mb-2 user1">
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Lara Croft</p>
                  <p className="text-muted small mb-0">
                  </p>
                </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">hello</p>
                        </Card.Body>
                        {/* <Card.Footer>
                <p className="text-muted small mb-0">
                28/12/2022 9:18 AM
                  </p>
                  
                </Card.Footer> */}
                      </Card>
                      <span className="avatar-img">
                        <img
                          src={avatar2}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                    </li>
                    <p className="text-muted small text-end mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>

                  <div>
                    <li className="d-flex justify-content-start mb-2 user2">
                      <span className="avatar-img avtar-img2">
                        <img
                          src={avatar1}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                   
                  </p>
                </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </Card.Body>
                        {/* <Card.Footer>
                <p className="text-muted small mb-0">
                28/12/2022 9:18 AM
                  </p>
                  
                </Card.Footer> */}
                      </Card>
                    </li>
                    <p className="text-muted small text-start mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>

                  <div>
                    <li className="d-flex justify-content-end mb-2 user1">
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Lara Croft</p>
                  <p className="text-muted small mb-0">
                  </p>
                </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">hello</p>
                        </Card.Body>
                        {/* <Card.Footer>
                <p className="text-muted small mb-0">
                28/12/2022 9:18 AM
                  </p>
                  
                </Card.Footer> */}
                      </Card>
                      <span className="avatar-img">
                        <img
                          src={avatar2}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                    </li>
                    <p className="text-muted small text-end mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>

                  <div>
                    <li className="d-flex justify-content-start mb-2 user2">
                      <span className="avatar-img avtar-img2">
                        <img
                          src={avatar1}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                   
                  </p>
                </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </Card.Body>
                        {/* <Card.Footer>
                <p className="text-muted small mb-0">
                28/12/2022 9:18 AM
                  </p>
                  
                </Card.Footer> */}
                      </Card>
                    </li>
                    <p className="text-muted small text-start mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>
                  <div>
                    <li className="d-flex justify-content-end mb-2 user1">
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Lara Croft</p>
                  <p className="text-muted small mb-0">
                  </p>
                </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">hello</p>
                        </Card.Body>
                        {/* <Card.Footer>
                <p className="text-muted small mb-0">
                28/12/2022 9:18 AM
                  </p>
                  
                </Card.Footer> */}
                      </Card>
                      <span className="avatar-img">
                        <img
                          src={avatar2}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                    </li>
                    <p className="text-muted small text-end mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>

                  <div>
                    <li className="d-flex justify-content-start mb-2 user2">
                      <span className="avatar-img avtar-img2">
                        <img
                          src={avatar1}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                   
                  </p>
                </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </Card.Body>
                        {/* <Card.Footer>
                <p className="text-muted small mb-0">
                28/12/2022 9:18 AM
                  </p>
                  
                </Card.Footer> */}
                      </Card>
                    </li>
                    <p className="text-muted small text-start mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>
                  <div>
                    <li className="d-flex justify-content-end mb-2 user1">
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Lara Croft</p>
                  <p className="text-muted small mb-0">
                  </p>
                </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">hello</p>
                        </Card.Body>
                        {/* <Card.Footer>
                <p className="text-muted small mb-0">
                28/12/2022 9:18 AM
                  </p>
                  
                </Card.Footer> */}
                      </Card>
                      <span className="avatar-img">
                        <img
                          src={avatar2}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                    </li>
                    <p className="text-muted small text-end mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>

                  <div>
                    <li className="d-flex justify-content-start mb-2 user2">
                      <span className="avatar-img avtar-img2">
                        <img
                          src={avatar1}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                        />
                      </span>
                      <Card className="usercard mx-3">
                        {/* <CardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                   
                  </p>
                </CardHeader> */}
                        <Card.Body>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </Card.Body>
                        {/* <Card.Footer>
                <p className="text-muted small mb-0">
                28/12/2022 9:18 AM
                  </p>
                  
                </Card.Footer> */}
                      </Card>
                    </li>
                    <p className="text-muted small text-start mt-0">
                      28/12/2022 9:18 AM
                    </p>
                  </div>
                </div>

                <div className="text-area">
                  <li className="mb-3">
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        placeholder="Type your message here"
                      />
                      <InputGroup.Text>
                        <Button color="" rounded className="float-end">
                          <GrSend />
                        </Button>
                      </InputGroup.Text>
                    </InputGroup>
                  </li>
                </div>
              </ListGroupItem>
       </div>
            {/* <Chat /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
