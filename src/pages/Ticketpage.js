import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const Ticketpage = () => {
  const props = useParams();
  const [ticket, setTicket] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/api/ticket/${props.id}`, {
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
    <Container>
      <div style={{ height: "100vh" }} className="bg-light p-3">
        <h1>Ticket {ticket.id}</h1>
        <p>{ticket.subject}</p>
        <p>{ticket.description}</p>
        <form onSubmit={handleSubmit}>
          <Button type="submit">Delete</Button>
        </form>
      </div>
    </Container>
  );
};

export default Ticketpage;
