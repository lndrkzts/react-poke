import React from 'react';
import { useSelector } from 'react-redux';

import { Carousel, Col } from 'react-bootstrap';

export default function PokeCarousel() {

  const { poke } = useSelector(state => state);
  const { sprites } = poke.pokemon;

  return (
    <Col md={{ span: 4, offset: 4 }} className="mt-4" >
      <Carousel style={{ backgroundColor: '#d6d6d6' }}>
        {
          sprites && sprites.front_default &&
          <Carousel.Item>
            <img
              className="w-50"
              alt="Imagen frontal"
              src={ sprites.front_default } 
            />
          </Carousel.Item>
        }
        {
          sprites && sprites.back_default &&
          <Carousel.Item>
            <img
              className="w-50"
              alt="Imagen trasera"
              src={ sprites.back_default } 
            />
          </Carousel.Item>
        }
      </Carousel>
    </Col>
  );
}