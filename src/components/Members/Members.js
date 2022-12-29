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
import { FaSearch } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { GrSend } from "react-icons/gr";

const Members = () => {
    const [show, setShow] = useState(false);
    let w  = window.innerWidth;
    console.log(w)  
  return (
    <div>
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
                    <li className="p-2" style={{ backgroundColor: "#eee" }} onClick={() => setShow(!show)}>
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
                    <li className="p-2" onClick={() => setShow(!show)}>
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
    </div>
  )
}

export default Members
