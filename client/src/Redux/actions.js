import axios from "axios";

export const CREATE_DOG = "CREATE_DOG";
export function createdogs(payload) {
  const request = {
    url: "/dogs",
    method: "POST",
    data: payload,
  };
  return function (dispatch) {
    return axios(request).then((response) => {
      dispatch({ type: CREATE_DOG, payload: response.data });
    });
  };
}

export const GET_DOGS = "GET_DOGS";
export const getDogs = () => {
  return async function (dispatch) {
    const apiData = await axios.get("/dogs/");
    const dogs = apiData.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const GET_DOG = "GET_DOG";
export const getDog = (id) => {
  return async function (dispatch) {
    let json = await axios.get("/dogs/" + id);
    return dispatch({ type: GET_DOG, payload: json.data });
  };
};

export const GET_TEMPS = "GET_TEMPS";
export function getTemperaments() {
  return async function (dispatch) {
    var json = await axios.get("/temperament");
    var listOfTemperaments = json.data.map((el) => el.name);
    return dispatch({
      type: "GET_TEMPS",
      payload: listOfTemperaments,
    });
  };
}

export const GET_NAME_DOGS = "GET_NAME_DOGS";
export function getNameDogs(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/dogs?name=${name}`);
      return dispatch({
        type: GET_NAME_DOGS,
        payload: json.data,
      });
    } catch (error) {
      alert("No hay Perro con ese Nombre!");
    }
  };
}

export const CLEAR_STATE = "CLEAR_STATE";
export const clearState = () => {
  return { type: CLEAR_STATE };
};

// Ordenadores -----------------------------------------------------------------
export const ORDER_ASC_NAME = "ORDER_ASC_NAME";
export function orderByName(payload) {
  return {
    type: ORDER_ASC_NAME,
    payload,
  };
}

export const ORDER_ASC_WEIGTH = "ORDER_ASC_WEIGTH";
export function orderByWeigth(payload) {
  return {
    type: ORDER_ASC_WEIGTH,
    payload,
  };
}

export const ORDER_BY_CREATOR = "ORDER_BY_CREATOR";
export function orderByCreator(payload) {
  return {
    type: ORDER_BY_CREATOR,
    payload,
  };
}
// filtros -----------------------------------------------------------
export const FILTER_BY_TEMP = "FILTER_BY_TEMP";
export function filterByTemp(payload) {
  return {
    type: FILTER_BY_TEMP,
    payload,
  };
}
