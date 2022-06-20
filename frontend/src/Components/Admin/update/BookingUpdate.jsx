import axios from "axios"; //for cross connection 
import React, { useState } from "react"; //for react functions
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"; //importing functions form reactstrap

const BookingUpdate = ({ id }) => {
  const [data, setData] = useState({
    email: "",
    address: "",
    // contact: "",
    // from: "",
    // to: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { data: res } = await axios.put(
      `http://localhost:8080/api/booking/${id}`,
      data
    );
    console.log(res);
  };
  return (
    <div>
   
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="someone@example.com"
            value={data.email}
            onChange={handleChange}
          />
   
        
          <Label for="exampleEmail">Address</Label>
          <Input
            type="address"
            name="address"
            id="address"
            placeholder="address"
            value={data.address}
            onChange={handleChange}
          />
        
          {/* <Label for="exampleEmail" maxlength="10">
            Contact
          </Label>
          <Input
            type="number"
            name="contact"
            id="contact"
            placeholder="Contact No"
            value={data.contact}
            onChange={handleChange}
          /> */}

        
          {/* <Label for="exampleEmail">From</Label>
          <Input
            type="date"
            name="from"
            id="exampleselect"
            placeholder="DD/MM/YYYY"
            value={data.from}
            onChange={handleChange}
          />
        
          <Label for="exampleEmail">To</Label>
          <Input
            type="date"
            name="to"
            id="exampleselect"
            placeholder="DD/MM/YYYY"
            value={data.to}
            onChange={handleChange}
          /> */}
        <Button
         onClick={handleUpdate}
          style={{ width: "120px", background: "blue" }}
        >
          Update
        </Button>
    </div>
  );
};

export default BookingUpdate;
