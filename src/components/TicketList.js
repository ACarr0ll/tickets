import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class TicketList extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://andrewticketapi.herokuapp.com/api/tickets`, {
        mode: "cors",
      })
      .then((res) => {
        const json = res.data;
        this.setState({ data: json });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map((ticket) => (
          <li key={ticket.id}>
            <Link to={`/ticket/${ticket.id}`} state={{ id: ticket.id }}>
              {ticket.Subject}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default TicketList;
