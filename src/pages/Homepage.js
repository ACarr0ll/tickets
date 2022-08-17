import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const removeBullets = {
  listStyle: "none",
};

const Homepage = () => (
  <Container>
    <div className="bg-light">
      <h1 className="mr-auto">Hello, Welcome to my ticket system</h1>
      <p>
        {" "}
        This system is my way of practicing the MERN stack. My goal is to create
        a complete ticketing system with functionality that helps speed up
        ticket solves and cohesion in a team
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        voluptatibus magnam unde cumque. Velit fuga ipsum ab omnis minus
        corrupti itaque architecto repudiandae mollitia sed. Dolor nobis qui
        ratione fugiat ipsum culpa quidem dolores, dolorem est voluptatibus
        aliquid odio officiis maxime repudiandae tenetur obcaecati doloribus
        voluptas architecto delectus quod accusantium?
      </p>
      <CardGroup>
        <Card
          border="success"
          bg="success"
          text="white"
          className="justify-content-center"
        >
          <Card.Header as="h2">
            <div className="text-center">
              <u>Current Features:</u>
            </div>
          </Card.Header>
          <Card.Text as="div">
            <ul style={removeBullets} className="text-center">
              <li>Create a new ticket</li>
              <li>View individual tickets from a list</li>
              <li>Delete a ticket</li>
            </ul>
          </Card.Text>
        </Card>
        <Card
          border="danger"
          bg="danger"
          text="white"
          className="justify-content-center"
        >
          <Card.Header as="h2">
            <div className="text-center">
              <u>Planned Features:</u>
            </div>
          </Card.Header>
          <Card.Text as="div">
            <ul style={removeBullets} className="text-center">
              <li>Create a user account and have permissions</li>
              <li>Link tickets to account who created it</li>
              <li>Able to assign cases to specific agents</li>
              <li></li>
            </ul>
          </Card.Text>
        </Card>
      </CardGroup>
    </div>
  </Container>
);

export default Homepage;
