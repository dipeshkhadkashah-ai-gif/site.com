import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import './styles.module.css'

const SingleReservation = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getReservationsById = async () => {
      const { data: response } = await axios.get(
        `http://localhost:8080/api/reservation/${id}`
      );
      setData(response);
      console.log(response);
    };
    getReservationsById();
  }, []);

  const bookAlert = () => {
    window.alert("Booked successfully!")
  }

  return (
    <Row className="mb-5">
      <Col className="p-5" md={4}>
        <Col>
        <img src={'http://localhost:8080/api/reservation/' + data.image} alt="" />
        </Col>
        <Col>
          <h4>Name: {data.name}</h4>
        </Col>
        <Col>
          <h4>Role: {data.role}</h4>
        </Col>
        <Col>
          <h4>Proffession: {data.proffession}</h4>
        </Col>
      </Col>
      <Col md={8} className='p-5'>
        <Col>
         
            <h4>Experience</h4>
            <ul>
              <li>  <p> {data.experience}</p></li>
            </ul>
           
         
        </Col>
        <Col className='mt-4'>
        <h4>Achievements & Goals</h4>
        <p>{data.achievement}</p>
        </Col>
        <Col>
        <Button variant="primary" className="book">
          <Link to='/bookphotographer' className="text-white">Book</Link></Button>{' '}
        <Link to='/reservation'>
        <Button variant="danger" className="book">Refuse</Button>
        </Link>
        </Col>
      </Col>
    </Row>
  );
};

export default SingleReservation;
