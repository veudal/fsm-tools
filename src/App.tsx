import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { Link, NavLink, Route, Switch, HashRouter as Router } from "react-router-dom";
import {Simulator, Minimizer, Home} from './pages';

function App() {
  return (
    <Router basename={"/"}>
      <header>
        <Navbar className="mx-auto" style={{ maxWidth: "1150px" }} collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand as={Link} to="/">FSM Tools</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link className="text-secondary" as={NavLink} to="/simulator">Simulator</Nav.Link>
                  <Nav.Link className="text-secondary" as={NavLink} to="/minimizer">Minimizer</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        <Switch>
          <Route path={"/"} exact>
            <Home/>
          </Route>
          <Route path="/simulator">
            <Simulator/>
          </Route>
          <Route path="/minimizer">
            <Minimizer/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
