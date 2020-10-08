import { loadingApp, loadedApp } from './appDucks';
import { getUrl } from '../../utils/http';


const FETCH_POKEMON = 'FETCH_POKEMON';


const defaultState = {
  id: null,
  pokemon: {},
  frontImage: "",
}


export default function reducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: payload.pokemon,
      }

    default:
      return state;
  }
}


function fetchPokemon(pokemon) {
  return {
    type: FETCH_POKEMON,
    payload: {
      pokemon,
    }
  }
}


export function getPokemon(id) {
  return async (dispatch, state) => {
    dispatch(loadingApp);

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
      const pokemon = await getUrl(url);
      console.log(pokemon);
      dispatch(fetchPokemon(pokemon));
      dispatch(loadedApp(false, false, ""));
    } catch {
      dispatch(loadedApp(false, true, "Error al obtener el pokemon"));
    }
  }
}
