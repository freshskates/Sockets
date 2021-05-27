import React from "react";
import { Tab, Nav } from "react-bootstrap";
const labels = { Conversations: "conversations", Contacts: "contacts" };

export default function Sidebar({ id }) {
  const tabs = [,];
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container>
        <Nav>
          {tabs.map((key, val) => {
            return (
              <Nav.Item>
                <Nav.Link eventKey={key}>{val}</Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </Tab.Container>
    </div>
  );
}
