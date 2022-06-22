import React, {useState} from "react";

const Management = () => {
    const [experience, setExperience] = useState('');
    const [skill, setSkill] = useState('');
    const [hour, setHour] = useState('');
  return (
    <>
      <div>
        <Form className="container col-lg-4 mt-lg-5 mb-lg-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="String"
                placeholder="Enter your Experience"
                value={experience}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Skill"
              value={skill}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Working Hours"
              value={hour}
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submit}>
            Book
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Management;
