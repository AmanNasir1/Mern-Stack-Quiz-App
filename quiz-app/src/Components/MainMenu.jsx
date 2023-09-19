import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Col, Row } from "antd";
const MainMenu = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = () =>{
    console.log("test")
  }

  return (
    <div className="menu ">
      <Row justify="center">
        <Col>
          <Input
            placeholder="Enter Name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Input
            placeholder="Age"
            className="form-input"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Input
            placeholder="Country"
            className="form-input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Link to="/quiz" className="link-to-start" onClick={handleSubmit}>
            Start Quiz
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default MainMenu;
