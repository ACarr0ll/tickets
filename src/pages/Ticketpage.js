import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Ticketpage = () => {
  const props = useParams();
  const [ticket, setTicket] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/ticket/${props.id}`, {
        mode: "cors",
      })
      .then((res) => {
        setTicket(res.data);
      });
  }, [props]);

  if (!ticket) return <>No Ticket Available</>;

  return (
    <>
      <h1>Ticket {ticket.id}</h1>
      <p>{ticket.Subject}</p>
      <p>{ticket.Description}</p>
    </>
  );
};

export default Ticketpage;
