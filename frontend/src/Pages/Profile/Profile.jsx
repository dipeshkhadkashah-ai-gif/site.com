import React, { useEffect, useState } from "react";
import { Row, Col, Form,Button,Table } from "react-bootstrap";
import axios from "axios";
const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      const { data: response } = await axios.get(
        "http://localhost:8080/api/booking"
      );
      console.log(response);
      setData(response);
    };

    getBookings();
  }, []);
  return (
    <>
      <Row className='gx-0'>
        <Col md={3}>
            <h3 style={{textAlign:'center',margin:'10px'}}>My Profile</h3>
          <Form style={{width:'300px'}} className="m-3 p-3">
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" placeholder="name" value onChange />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email" value onChange />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                value
                onChange
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
                 <Button className="mt-3" style={{background:"blue",width:'200px'}}>
                Update
            </Button>
            </div>
           
          </Form>
        </Col>
        <Col md={8} className="mt-5">
          <h3 style={{textAlign:'center'}}>My Bookings</h3>
          <Col>
          <Table striped bordered className="table-sm table-hover table-responsive-md">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Session</th>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Address</th>
              </tr>
            </thead>

            <tbody>
              {data.map((booking, key) => (
                <tr key={key}>
                  <td>{booking.name}</td>
                  <td>{booking.contact}</td>
                  <td>{booking.email}</td>
                  <td>{booking.session}</td>
                  <td>{booking.type}</td>
                  <td>{booking.from.split("", 10)}</td>
                  <td>{booking.to.split("", 10)}</td>
                  <td>{booking.address}</td>
               
                </tr>
              ))}
            </tbody>
          </Table>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
