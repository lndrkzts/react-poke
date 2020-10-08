import React from 'react';
import { useSelector } from 'react-redux';

import { Card, Col, ListGroup, CardColumns } from 'react-bootstrap';

export default function PokeDescription() {

  const { poke } = useSelector(state => state);
  const { pokemon } = poke;

  return (
    <Col md={{ span: 8, offset: 2 }} className="mt-4" >
      <CardColumns style={{ justifyContent: 'center' }}>
      
        <Card
          bg="warning"
          text="white"
          className="mb-2">
          <Card.Header>ORDER</Card.Header>
            <ListGroup>
              {
                pokemon?.order && <ListGroup.Item variant="warning">{ pokemon.order }</ListGroup.Item>
              }
            </ListGroup>
        </Card>

        <Card
          bg="primary"
          text="white"
          className="mb-2">
          <Card.Header>ABILITIES</Card.Header>
            <ListGroup>
              {
                pokemon.abilities && pokemon.abilities.map((item, index) => {
                  return <ListGroup.Item variant="primary" key={ index }>{ item.ability.name.toUpperCase() }</ListGroup.Item>
                })
              }
            </ListGroup>
        </Card>

        <Card
          bg="success"
          text="white"
          className="mb-2">
          <Card.Header>MOVES</Card.Header>
            <ListGroup>
              {
                pokemon.moves && pokemon.moves.slice(0, 5).map((item, index) => {
                  return <ListGroup.Item variant="success" key={ index }>{ item.move.name.toUpperCase() }</ListGroup.Item>
                })
              }
            </ListGroup>
        </Card>

        <Card
          bg="danger"
          text="white"
          className="mb-2">
          <Card.Header>TYPES</Card.Header>
            <ListGroup>
              {
                pokemon?.types?.map((item, index) => {
                  return <ListGroup.Item variant="danger" key={ index }>{ item.type.name.toUpperCase() }</ListGroup.Item>
                })
              }
            </ListGroup>
        </Card>

      </CardColumns>
    </Col>
  );
}