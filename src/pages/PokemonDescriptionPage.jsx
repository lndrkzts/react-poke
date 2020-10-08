import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { getPokemon } from '../redux/ducks/pokeDucks';

import PokemonDescriptionTemplate from '../templates/PokemonDescriptionTemplate';

export default function PokemonDescriptionPage(){

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch]);

  return (
    <PokemonDescriptionTemplate />
  );
}