import { getUrl } from '../../utils/http';


const LOADING_APP = 'LOADING_APP';
const LOADED_APP = 'LOADED_APP';
const POKEMONS_PER_PAGE = 'POKEMONS_PER_PAGE';
const FETCH_POKEMONS = 'FETCH_POKEMONS';


const defaultState = {
  loading: true,
  error: false,
  errorMsg: "",
  pokemons: [],
  pokemonsPerPage: 30,
  previousPage: "",
  nextPage: "",
}


export default function reducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADING_APP:
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      }

    case LOADED_APP:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
        errorMsg: payload.errorMsg,
      }

    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: payload.pokemons,
        previousPage: payload.previousPage,
        nextPage: payload.nextPage,
      }

    case POKEMONS_PER_PAGE:
      return {
        ...state,
        pokemonsPerPage: payload.pokemonsPerPage,
      }

    default:
      return state;
  }
}


export function loadingApp() {
  return { type: LOADING_APP }
}

export function loadedApp(loading, error, errorMsg) {
  return {
    type: LOADED_APP,
    payload: {
      loading,
      error,
      errorMsg
    }
  }
}

function fetchPokemons(pokemons, previousPage, nextPage) {
  return {
    type: FETCH_POKEMONS,
    payload: {
      pokemons,
      previousPage,
      nextPage,
    }
  }
}

export function getPokemons(url) {
  return async (dispatch, state) => {
    window.scrollTo(0, 0);
    dispatch(loadingApp);

    try {
      let pokemons = await getUrl(url);
      dispatch(fetchPokemons(pokemons.results, pokemons.previous, pokemons.next));
      dispatch(loadedApp(false, false, ""));
    } catch {
      dispatch(loadedApp(false, true, "Error al obtener los pokemons"));
    }
  }
}

export function setPokemonsPerPage(pokemonsPerPage) {
  return {
    type: POKEMONS_PER_PAGE,
    payload: {
      pokemonsPerPage,
    }
  }
}