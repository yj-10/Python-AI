import React from "react";

import { Radar } from "react-chartjs-2";
import { Col, DatePicker, Row, Slider } from "antd";
import LineChart from "./Component/LineChart";
import TableChart from "./Component/TableChart";
import { Typography } from "antd";
const { Title } = Typography;
const App = () => {
  let x = document.getElementById("#one");
  console.log("X", x);

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

          <div className="Row_col" span={24}>
            <Row>
              <Col span={10} offset={2}>
                <div className="Wrapper_Content">
                  <h1>Pregnancies</h1>
                  <Slider marks={marks} step={""} id="one" defaultValue={12} />
                </div>
              </Col>

              <Col span={10} offset={2}>
                <div className="Wrapper_Content">
                  <h1>Blood Pressure</h1>
                  <Slider marks={marks} step={null} defaultValue={12} />
                </div>
              </Col>
              <Col span={10} offset={2}>
                <div className="Wrapper_Content">
                  <h1>Skin Thickness</h1>
                  <Slider marks={marks} step={null} defaultValue={12} />
                </div>
              </Col>
              <Col span={10} offset={2}>
                <div className="Wrapper_Content">
                  <h1>Insulin</h1>{" "}
                  <Slider marks={marks} step={null} defaultValue={12} />
                </div>
              </Col>
              <Col span={10} offset={2}>
                <div className="Wrapper_Content">
                  <h1>BMI</h1>{" "}
                  <Slider marks={marks} step={null} defaultValue={12} />
                </div>
              </Col>
              <Col span={10} offset={2}>
                <div className="Wrapper_Content">
                  <h1>glucose</h1>{" "}
                  <Slider marks={marks} step={null} defaultValue={12} />
                </div>
              </Col>
              <Col span={10} offset={2}>
                <div className="Wrapper_Content">
                  <h1> Diabetes pedigree function</h1>{" "}
                  <Slider marks={marks} step={null} defaultValue={12} />
                </div>
              </Col>
              <Col span={10} offset={2}>
                <div className="Wrapper_Content">
                  <h1>Age</h1>{" "}
                  <Slider marks={marks} step={null} defaultValue={12} />
                </div>
              </Col>
              <Col span={22} offset={2}>
                <div className="Wrapper_Content">
                  <button>Submit</button>
                </div>
              </Col>
            </Row>
          </div>

          <div className="wrpper_table">
            <TableChart />
          </div>
        </div>
      </div>
      {/* <div className="Wrapper_sec_Container">
        <Row>
          <Col span={12}>
            <LineChart />
          </Col>
          <Col span={12}>
            <div className="Result_div">
              <div className="Result_Row">
                <article>
                  <h3>Report</h3>
                  <h1>You are not Diabetic</h1>
                </article>
              </div>
            </div>
          </Col>
        </Row>
      </div> */}
    </>
  );
};

export default App;
