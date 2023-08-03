import React from "react";

import { Radar } from "react-chartjs-2";
import { Col, DatePicker, Row, Slider } from "antd";
import LineChart from "./Component/LineChart";
import TableChart from "./Component/TableChart";
import { Typography } from "antd";
const { Title } = Typography;
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
          <Row gutter={18}>
            <Col span={12}>
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
                <Col span={24}>
                  <div className="Wrapper_Content">
                    <button>Submit</button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <TableChart />
            </Col>
          </Row>
        </div>
      </div>
      <div className="Wrapper_sec_Container">
        <Row>
          <Col span={12}>
            <LineChart />
          </Col>
          <Col span={12}>
            <div className="Result_div">
              <div className="Result_Row">
                <article>
                  <Title level={2}>Report</Title>
                  <Title>You are not Diabetic</Title>
                </article>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
