import { Form, Slider } from "antd";
import TableChart from "./Component/TableChart";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import infosense from "../src/assest/Infosense.png";
import LineChart from "./Component/LineChart";
import Footer from "./Component/Footer";
import * as mark from "./Component/marksinfo";
import { BsTelephone } from "react-icons/bs";
import axios from "axios";
import Table from "react-bootstrap/Table";
function App() {
  const [showdata, setdata] = useState("");
  console.log("452", showdata);
  const onFinish = (values) => {
    axios
      .post("https://b4f5-27-5-6-34.ngrok-free.app/core/get_diabetes_data", {
        values,
      })
      .then((res) => {
        console.log(res);
      });
    setdata(values);
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="wrapper">
        <div className="headers">
          {" "}
          <Container>
            <Row
              className="d-flex align-items-center"
              style={{ padding: "10px 0px" }}
            >
              <Col lg={8} md={6} sm={12}>
                <img src={infosense} className="img-fluid w-25" alt="no-img" />
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div style={{ marginTop: "12px" }}>
                  <p>
                    <BsTelephone /> Contact Us :- +91 - 9343017165
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="Marquee_container">
          <marquee direction="right" className="h6 text-uppercase">
            diabetes data analytics By Infosense
          </marquee>
        </div>

        <Container>
          <div className="Wrapper_title">
            <h1 className="text-center">Patient Data</h1>
          </div>
          <Form onFinish={onFinish}>
            <Row className="gx-5 ">
              <Col className="Row_col ">
                <div className="Wrapper_Content">
                  <Form.Item name="pregnancies" label="Pregnancies">
                    <Slider
                      marks={{
                        0: "0",
                        2: "2",
                        4: "4",
                        6: "6",
                        8: "8",
                        10: "10",
                        12: "12",
                        14: "14",
                        17: "17",
                      }}
                      min={0}
                      max={17}
                    />
                  </Form.Item>
                </div>
                <div className="Wrapper_Content  ">
                  <Form.Item name="glucose" label="Glucose">
                    <Slider
                      className="w-100"
                      marks={{
                        0: "0",
                        20: "20",
                        40: "40",
                        60: "60",
                        80: "80",
                        100: "100",
                        120: "120",
                        140: "140",
                        160: "160",
                        180: "180",
                        200: "200",
                      }}
                      min={0}
                      max={200}
                    />
                  </Form.Item>
                </div>
                <div className="Wrapper_Content">
                  <Form.Item name="bloodPressure" label="Blood Pressure">
                    <Slider
                      marks={{
                        0: "0",
                        20: "20",
                        40: "40",
                        60: "60",
                        80: "80",
                        100: "100",
                        122: "122",
                      }}
                      min={0}
                      max={122}
                    />
                  </Form.Item>
                </div>
                <div className="Wrapper_Content">
                  <Form.Item name="skinThickness" label="Skin Thikness">
                    <Slider
                      marks={{
                        0: "0",
                        20: "20",
                        40: "40",
                        60: "60",
                        80: "80",
                        100: "100",
                      }}
                      min={0}
                      max={100}
                    />
                  </Form.Item>
                </div>
              </Col>
              <Col lg={6} sm={12} md={6} className="Row_col ">
                <div className="Wrapper_Content">
                  <Form.Item name="insulin" label="Insulin">
                    <Slider
                      marks={{
                        0: "0",
                        200: "200",
                        400: "400",
                        600: "600",
                        700: "700",
                        846: "846",
                      }}
                      min={0}
                      max={846}
                    />
                  </Form.Item>
                </div>
                <div className="Wrapper_Content">
                  <Form.Item name="BMI" label="BMI">
                    <Slider
                      marks={{
                        0: "0",
                        20: "20",
                        40: "40",
                        67: "67",
                      }}
                      min={0}
                      max={67}
                    />
                  </Form.Item>
                </div>
                <div className="Wrapper_Content">
                  <Form.Item name="Age" label="Age">
                    <Slider
                      marks={{
                        0: "0",
                        20: "20",
                        40: "40",
                        60: "60",
                        88: "88",
                      }}
                      min={0}
                      max={88}
                    />
                  </Form.Item>
                </div>
                <div className="Wrapper_Content">
                  <Form.Item name="diabetesPedigreeFunction" label="Diabetes">
                    <Slider
                      marks={{
                        0: "0",
                        20: "20",
                        40: "40",
                        60: "60",
                        80: "80",
                        100: "100",
                      }}
                   
                      min={0}
                      max={100}
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>

            <div className="div_button my-4">
              <button>submit</button>
            </div>
          </Form>
        </Container>
        <div className="Wrapper_sec_Container">
          <Container>
            <Row className="gx-5 mb-5 ">
              <Col md={12} sm={12} lg={6}>
                <Table striped responsive bordered>
                  <thead>
                    <tr>
                      <th>Pregnancies</th>
                      <th>Glucose</th>
                      <th>Blood Pressure</th>
                      <th>Skin Thikness</th>
                      <th>Insulin</th>
                      <th>BMI</th>
                      <th>Age</th>
                      <th>Diabetes Pedigree </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{showdata == "" ? "0" : showdata.pregnancies}</td>
                      <td>{showdata == "" ? "0" : showdata.glucose}</td>
                      <td>{showdata == "" ? "0" : showdata.bloodPressure}</td>
                      <td>{showdata == "" ? "0" : showdata.skinThickness}</td>
                      <td>{showdata == "" ? "0" : showdata.insulin}</td>
                      <td>{showdata == "" ? "0" : showdata.BMI}</td>
                      <td>{showdata == "" ? "0" : showdata.Age}</td>
                      <td>
                        {showdata == ""
                          ? "0"
                          : showdata.diabetesPedigreeFunction}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md={12} sm={12} lg={6}>
                <div className="Result_div border">
                  <div className="Result_Row d-flex justify-content-center align-items-center">
                    <article>
                      <h3>Report</h3>
                      <h1>You are not Diabetic</h1>
                    </article>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
