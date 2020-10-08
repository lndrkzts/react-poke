import React from 'react';
import { useSelector } from 'react-redux';

import { CardDeck, Container, Col, Row, Spinner } from 'react-bootstrap';

import PokeCard from '../components/PokeCard/PokeCard';
import Pagination from '../components/Pagination/Pagination';
import PokemonsPerPage from '../components/PokemonsPerPage/PokemonsPerPage';

export default function PokemonListTemplate(){

  const { app } = useSelector(state => state);
  const { pokemons, loading } = app;

  console.log(loading);

  return (
    <Container fluid>
      {
        loading &&
        <Spinner animation="border" role="status" />
      }
      <Row>
        <Col>
          <h1>Pokemons</h1>
        </Col>
      </Row>
        <PokemonsPerPage />
      <Row style={{ display: 'flex', flex: 'wrap' }}>
        <Col>
          <CardDeck style={{ justifyContent: 'center' }}>
          {
            Array.isArray(pokemons) && pokemons.map((pokemon, index) => {
              return <PokeCard key={ index } name={ pokemon.name } url = { pokemon.url } />
            })
          }
          </CardDeck>
        </Col>
      </Row>
      <Row>
        <Pagination />
      </Row>
    </Container>
  );
}