import {
  CREATE_DOG,
  GET_DOGS,
  GET_DOG,
  GET_TEMPS,
  GET_NAME_DOGS,
  CLEAR_STATE,
  ORDER_ASC_NAME,
  ORDER_ASC_WEIGTH,
  ORDER_BY_CREATOR,
  FILTER_BY_TEMP,
} from "./actions";

const initialState = {
  dogs: [],
  allDogs: [],
  dogsById: "",
  temperaments: [],
  create: "initial",
  allTemperaments: [],
  nada: [],
};

const rootReducer = (state = initialState, action, payload) => {
  switch (action.type) {
    case CREATE_DOG:
      return {
        ...state,
        createVideogame: action.payload,
      };

    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };

    case GET_DOG:
      return {
        ...state,
        dogsById: action.payload,
      };

    case GET_TEMPS:
      return {
        ...state,
        temperaments: action.payload, //filter
        allTemperaments: action.payload, //filter
      };

    case GET_NAME_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };

    case CLEAR_STATE:
      return {
        ...state,
        dogsById: {},
      };

    //ordenados---------------------------------------------------------------
    case ORDER_ASC_NAME:
      let sortedArr =
        action.payload === "asc_Nombre"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
            });
      console.log(sortedArr);
      return {
        ...state,
        dogs: sortedArr,
      };

    case ORDER_ASC_WEIGTH:
      let sortedArrR =
        action.payload === "asc_Peso"
          ? state.dogs.sort(function (a, b) {
              return parseInt(a.weight, 10) - parseInt(b.weight, 10);
            })
          : state.dogs.sort(function (a, b) {
              return parseInt(b.weight, 10) - parseInt(a.weight, 10);
            });
      return {
        ...state,
        dogs: sortedArrR,
      };

    case ORDER_BY_CREATOR:
      const dogsAll11 = state.allDogs;

      let createdFilter =
        action.payload === "Todos"
          ? state.allDogs
          : action.payload === "Api"
          ? dogsAll11.filter((el) => el.createdInDb === false)
          : dogsAll11.filter((el) => el.createdInDb === true);
      console.log("acaaa", createdFilter);
      return {
        ...state,
        dogs: createdFilter,
      };

    //filter -------------------------------------------------------------------
    case FILTER_BY_TEMP:
      const allDogs = state.allDogs;
      let filterDogs = [];
      if (action.payload === "Todos") {
        filterDogs = state.allDogs;
      } else {
        for (let i = 0; i < allDogs.length; i++) {
          let found = allDogs[i].temperament.find((t) => t === action.payload);
          if (found) {
            filterDogs.push(allDogs[i]);
          }
        }
      }
      return {
        ...state,
        dogs: filterDogs,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
