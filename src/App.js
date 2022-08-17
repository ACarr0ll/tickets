import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userlist from "./pages/Userlist";
import Ticketpage from "./pages/Ticketpage";
import NewTicket from "./pages/NewTicket";
import Missing from "./pages/Missing";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";
import TicketList from "./components/TicketList";

function App() {
  return (
    <div className="bg-dark">
      <Router>
        <Container>
          <Navigation />
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
    </div>
  );
}

export default App;
