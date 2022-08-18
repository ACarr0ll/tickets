import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useLayoutEffect } from "react";
import { useState } from "react";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  const getTickets = () => {
    axios
      .get(`${API_ENDPOINT}/api/tickets`, {
        mode: "cors",
      })
      .then((res) => {
        console.log(res.data);
        setTickets(res.data);
      });
  };

  useLayoutEffect(() => {
    getTickets();
  }, []);

  return (
    <Container>
      <div
        style={{ height: "100vh", listStylePosition: "inside" }}
        className="bg-light p-3 text-center"
      >
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket._id}>
              <Link
                className="link-dark"
                to={`/ticket/${ticket.id}`}
                state={{ id: ticket.id }}
              >
                {ticket.subject}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default TicketList;
