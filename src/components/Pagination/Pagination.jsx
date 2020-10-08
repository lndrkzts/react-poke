import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Col } from 'react-bootstrap';

import { getPokemons } from '../../redux/ducks/appDucks';

export default function Pagination(){

  const { app } = useSelector(state => state);
  const { previousPage, nextPage } = app;

  const dispatch = useDispatch();

  return (
    <Col>
    { 
      previousPage ? 
      <Button className="mr-2 mt-2 mb-4" onClick={ () => { dispatch(getPokemons(previousPage)) } }>Atrás</Button> 
      : null 
    }
    { 
      nextPage ? 
      <Button className="mr-2 mt-2 mb-4" onClick={ () => { dispatch(getPokemons(nextPage)) } }>Siguiente</Button> 
      : null 
    }
    </Col>
  )
}