import React from "react";
import { Col, DatePicker, Row, Slider } from "antd";

const App = () => {
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
      <div className="Marquee_container">
        <marquee direction="right">Daibeties By Infosense</marquee>
      </div>
      <div className="Wrapper">
        <div className="Wrapper_row">
          <div className="Wrapper_title">
            <h1 className="">Patient Data</h1>
          </div>
          <Row>
            <Col span={24}>
              <div className="Wrapper_Content">
                <h1>Pregnancies</h1>
                <Slider marks={marks} step={null} defaultValue={12} />
              </div>
            </Col>
            <Col span={24}>
              <div className="Wrapper_Content">
                <h1>Blood Pressure</h1>
                <Slider marks={marks} step={null} defaultValue={12} />
              </div>
            </Col>
            <Col span={24}>
              <div className="Wrapper_Content">
                <h1>Skin THickness</h1>
                <Slider marks={marks} step={null} defaultValue={12} />
              </div>
            </Col>
            <Col span={24}>
              <div className="Wrapper_Content">
                <h1>Insulin</h1>{" "}
                <Slider marks={marks} step={null} defaultValue={12} />
              </div>
            </Col>
            <Col span={24}>
              <div className="Wrapper_Content">
                <h1>BMI</h1>{" "}
                <Slider marks={marks} step={null} defaultValue={12} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default App;
