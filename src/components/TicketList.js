import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

class TicketList extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  getTickets() {
    axios
      .get(`${API_ENDPOINT}/api/tickets`, {
        mode: "cors",
      })
      .then((res) => {
        const json = res.data;
        this.setState({ data: json });
      });
  }

  componentDidMount() {
    this.getTickets();
  }

  render() {
    return (
      <ul>
        {this.state.data.map((ticket) => (
          <li key={ticket._id}>
            <Link to={`/ticket/${ticket.id}`} state={{ id: ticket.id }}>
              {ticket.subject}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default TicketList;
