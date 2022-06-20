import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import axios from "axios";

const CreateReservation = () => {
  //   const [name, setName] = useState("");
  //   const [role, setRole] = useState("");
  //   const [proffession, setProffession] = useState("");
  //   const [experience, setExperience] = useState("");
  //   const [achievement, setAchievement] = useState("");
    const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    role: "",
    experience: "",
    achievement: "",
    proffession: "",
  });


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/reservation/create";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      // window.location = "/";
    } catch (error) {
      setError('error');
      console.log(error)
    }
  };
  return (
    <Row className="m-5">
      <Col md={8}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter name"
              value={data.name}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              name="role"
              placeholder="Enter role"
              value={data.role}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Profession</Form.Label>
            <Form.Control
              type="text"
              name="proffession"
              placeholder="Enter profession"
              value={data.proffession}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="contact">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              name="experience"
              placeholder="Enter Experience"
              value={data.experience}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="contact">
            <Form.Label>Achievement</Form.Label>
            <Form.Control
              type="text"
              name='achievement'
              placeholder="Enter Achievement"
              value={data.achievement}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Button
            style={{ backgroundColor: "blue" }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateReservation;
