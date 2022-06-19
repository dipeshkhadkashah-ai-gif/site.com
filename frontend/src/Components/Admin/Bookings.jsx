import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidebar from '../Sidebar'
import ListGroup from 'react-bootstrap/ListGroup';
import { Table } from 'reactstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';


const Bookings = () => {
    const [data,setData]=useState([]);

  
    useEffect(() => {
        const getBookings=async()=>{
            const {response}=await axios.get('http://localhost:8080/api/booking')
            console.log(response)
            setData(response)
        } 
      
    
    getBookings()
    }, [getBookings])
    
  return (
    <div>
      <Row>
        <Col md={2}><Sidebar/></Col>
        <Col md={8}>
            <h2 style={{textAlign:'center'}}>Bookings</h2>
<Table>
    <thead>
        <tr></tr>
    </thead>
</Table>
        </Col>
      </Row>
    </div>
  )
}

export default Bookings
