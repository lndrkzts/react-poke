import React from 'react';

import { Nav, Navbar }  from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ErrorPage from '../../pages/ErrorPage';
import PokemonListPage from '../../pages/PokemonListPage';
import PokemonDescriptionPage from '../../pages/PokemonDescriptionPage';


export default function NavigationBar(){
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Navbar.Brand>Poke-app</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/listado">Pokemons</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path={["/", "/listado"]}>
          <PokemonListPage />
        </Route>
        <Route exact path="/detalle/:id">
          <PokemonDescriptionPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}