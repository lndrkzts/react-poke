import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonsTemplate from '../templates/PokemonListTemplate';
import { getPokemons } from '../redux/ducks/appDucks';


export default function PokemonListPage(){
  
  const { app } = useSelector(state => state);
  const { pokemonsPerPage } = app;
  const url = "https://pokeapi.co/api/v2/pokemon/?limit={0}".replace('{0}', pokemonsPerPage);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPokemons(url));
  }, [dispatch, pokemonsPerPage]);

  return (
    <PokemonsTemplate />
  );
}