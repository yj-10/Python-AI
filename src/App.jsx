import { Slider } from "antd";
import TableChart from "./Component/TableChart";
import "./App.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import infosense from "../src/assest/Infosense.png";
import LineChart from "./Component/LineChart";
import Footer from "./Component/Footer";
import * as mark from "./Component/marksinfo";
import { BsTelephone } from "react-icons/bs";

function App() {
  const marks = {
    0: "0°",
    10: "10",
    20: "20",

    30: "30",

    40: "40",

    50: "50",

    60: "60",

    70: "70",

    80: "80",

    90: "90",

    100: {
      style: {
        color: "#f50",
      },
      label: <strong>100</strong>,
    },
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
          <Row className="gx-5 ">
            <Col className="Row_col   " lg={6} sm={12} md={6}>
              <div className="Wrapper_Content">
                <h6>Pregnancies</h6>{" "}
                <Slider
                  marks={mark.marks}
                  step={""}
                  id="one"
                  defaultValue={12}
                />
              </div>
              <div className="Wrapper_Content w-50">
                <h6>Glucose</h6>{" "}
                <Slider
                  marks={mark.Glucose}
                  step={""}
                  id="one"
                  defaultValue={12}
                />
              </div>
              <div className="Wrapper_Content">
                <h6>Blood Pressure</h6>{" "}
                <Slider marks={marks} step={""} id="one" defaultValue={12} />
              </div>
              <div className="Wrapper_Content">
                <h6>Skin Thikness</h6>{" "}
                <Slider marks={marks} step={""} id="one" defaultValue={12} />
              </div>
            </Col>
            <Col lg={6} sm={12} md={6} className="Row_col ">
              <div className="Wrapper_Content">
                <h6>Insulin</h6>{" "}
                <Slider marks={marks} step={""} id="one" defaultValue={12} />
              </div>
              <div className="Wrapper_Content">
                <h6>BMI</h6>{" "}
                <Slider marks={marks} step={""} id="one" defaultValue={12} />
              </div>
              <div className="Wrapper_Content">
                <h6>Age</h6>{" "}
                <Slider marks={marks} step={""} id="one" defaultValue={12} />
              </div>
              <div className="Wrapper_Content">
                <h6>Diabetes Pedigree Function</h6>{" "}
                <Slider marks={marks} step={""} id="one" defaultValue={12} />
              </div>
            </Col>
          </Row>

          <div className="div_button my-4">
            <button>submit</button>
          </div>
        </Container>
        <div className="Wrapper_sec_Container">
          <Container>
            <Row className="gx-5 mb-5 ">
              <Col md={12} sm={12} lg={6}>
                <TableChart />
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
