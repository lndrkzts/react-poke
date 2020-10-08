import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Col, Row } from 'react-bootstrap';

import PokeCarousel from '../components/PokeCarousel/PokeCarousel';
import PokeDescription from '../components/PokeDescription/PokeDescription';

export default function PokemonDescriptionTemplate(){
  
  const { poke } = useSelector(state => state);
  const { name } = poke.pokemon;

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>{ name?.toUpperCase() }</h1>
        </Col>
      </Row>
      <Row>
        <PokeCarousel />
        <PokeDescription />
      </Row>
    </Container>
  );
}