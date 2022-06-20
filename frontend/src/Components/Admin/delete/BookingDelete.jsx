import React from "react";
import {Button} from 'react-bootstrap'
import axios from 'axios'
const BookingDelete = ({id}) => {
      // Delete Booking
  const handleDelete=async()=>{
    await axios.delete(`http://localhost:8080/api/booking/${id}`).then((response)=>{
      return response.json
    })
    .then((result)=>{
      console.log("Delete successfully",result)
      window.location.reload()
    })
  
    }
  return (
      <Button
        style={{ width: "120px", background: "red" }}
        onClick={handleDelete}
        className="mb-2"
      >
        Delete
      </Button>
  );
};

export default BookingDelete;
