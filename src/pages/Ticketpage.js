import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const Ticketpage = () => {
  const props = useParams();
  const [ticket, setTicket] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://andrewticketapi.herokuapp.com/api/ticket/${props.id}`, {
        mode: "cors",
      })
      .then((res) => {
        setTicket(res.data);
      });
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .delete(`${API_ENDPOINT}/api/ticket/delete/${props.id}`, {
        mode: "cors",
      })
      .then((res) => {
        navigate("/");
      });
  }

  if (!ticket) return <>No Ticket Available</>;

  return (
    <>
      <h1>Ticket {ticket.id}</h1>
      <p>{ticket.Subject}</p>
      <p>{ticket.Description}</p>
      <form onSubmit={handleSubmit}>
        <Button type="submit">Delete</Button>
      </form>
    </>
  );
};

export default Ticketpage;
