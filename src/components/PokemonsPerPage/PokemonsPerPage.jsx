import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Pagination } from 'react-bootstrap';

import { setPokemonsPerPage } from '../../redux/ducks/appDucks';

export default function PokemonsPerPage() {

  const { app } = useSelector(state => state);
  const { pokemonsPerPage } = app;

  const dispatch = useDispatch();

  return (
    <Pagination>
      <Pagination.Item
        className={pokemonsPerPage === 10 ? 'active' : ''}
        onClick={(e) => { dispatch(setPokemonsPerPage(10)) }}
      >10</Pagination.Item>
      <Pagination.Item
        className={pokemonsPerPage === 20 ? 'active' : ''}
        onClick={(e) => { dispatch(setPokemonsPerPage(20)) }}
      >20</Pagination.Item>
      <Pagination.Item
        className={pokemonsPerPage === 30 ? 'active' : ''}
        onClick={(e) => { dispatch(setPokemonsPerPage(30)) }}
      >30</Pagination.Item>
    </Pagination>
  )
}