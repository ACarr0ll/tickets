import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userlist from "./pages/Userlist";
import Ticketpage from "./pages/Ticketpage";
import NewTicket from "./pages/NewTicket";
import Missing from "./pages/Missing";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import TicketList from "./components/TicketList";

function App() {
  return (
    <Router>
      <Container className="container-fluid text-center">
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light" />
      </Container>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="ticket/:id" element={<Ticketpage />} />
        <Route path="ticket/new" element={<NewTicket />} />
        <Route path="user" element={<Userlist />} />
        <Route path="Tickets" element={<TicketList />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </Router>
  );
}

export default App;
