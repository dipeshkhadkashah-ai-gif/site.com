import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  },);

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.role}</p>
      <p>{data.proffession}</p>
      <p>{data.achievement}</p>
      <p>{data.experience}</p>
      <p></p>
    </div>
  );
};

export default SingleReservation;
