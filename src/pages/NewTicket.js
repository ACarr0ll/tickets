import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import uuid from "react-uuid";
import Container from "react-bootstrap/Container";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const NewTicket = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const sendTicket = (event) => {
    event.preventDefault();
    const id = uuid();
    axios
      .post(`${API_ENDPOINT}/api/ticket/new`, {
        mode: "cors",
        id: id,
        subject: subject,
        description: description,
      })
      .then((res) => {
        navigate("/");
      });
  };

  return (
    <Container>
      <form onSubmit={sendTicket}>
        <div>
          <h1>Create a new Ticket!</h1>
        </div>
        <div>
          <input
            type="text"
            size="30"
            placeholder="Subject/Title"
            value={subject}
            onChange={(event) => {
              setSubject(event.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            cols="30"
            rows="10"
            placeholder="This is where you would put the current issue you are having"
            value={description.value}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Container>
  );
};

export default NewTicket;
