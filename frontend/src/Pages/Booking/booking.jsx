import React, { useState } from "react"; //importing react form react
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"; //importing functions form reactstrap
import styles from "./styles.module.css"; //importing styles from style.css
import axios from 'axios'
// import Calendar from "react-calendar"; //importing a calendar from react-calendar
//import video1 from "../../video/video1.mp4"; //importing video for background
import H5 from "../../images/H5.jpg"; //importing image for background
//import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";



export default function Booking() {
  const [data, setData] = useState({ email: "", name: "",address:"",
contact:"",equipments:"",session:"",type:"",from:"",to:"" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/booking/create";
			const { data: res } = await axios.post(url, data);
			console.log(res)
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return ( 
    <div className={styles.booking}>
      <img src={H5.jpg}  />
      <div className="container pt-5">
        <h3 style={{ textAlign: "center" }}>Book Now!</h3>
        <Form
          style={{
            border: "2px solid grey",
            padding: "50px",
            marginTop: "30px",
          }}
        >
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input type="name" name="password" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="someone@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Address</Label>
            <Input
              type="address"
              name="address"
              id="address"
              placeholder="address"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" maxlength="10" >Contact</Label>
            <Input
              type="number"
              name="contact"
              id="contact"
              placeholder="Contact No"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Session</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>---</option>
              <option>PhotoGraphy</option>
              <option>VideoGraphy</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Type</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>---</option>
              <option>Basic</option>
              <option>Advance</option>
              <option>Beginner</option>
              <option>Professional</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Equipments</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>---</option>
              <option>Own</option>
              <option>Rental</option>
            </Input>
          </FormGroup>
          {/* <DatePickerComponent>
          <FormGroup>
            <Label for="exampleEmail">From</Label>
            <Input
              type="date"
              name="from"
              id="exampleselect"
              placeholder="DD/MM/YYYY"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">To</Label>
            <Input
              type="date"
              name="to"
              id="exampleselect"
              placeholder="DD/MM/YYYY"
            />
          </FormGroup>
          </DatePickerComponent> */}
          <FormGroup>
            <Label for="exampleEmail">From</Label>
            <Input
              type="date"
              name="from"
              id="exampleselect"
              placeholder="DD/MM/YYYY"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">To</Label>
            <Input
              type="date"
              name="to"
              id="exampleselect"
              placeholder="DD/MM/YYYY"
            />
          </FormGroup>
          <Button className={styles.submit}>Submit</Button>
          <Button className={styles.reset}>Reset</Button>
        </Form>
      </div>
      </div>
  );
}
