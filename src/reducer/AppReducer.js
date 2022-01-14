import getOptions from "../functions/getOptions";
import { initialAppState } from "./initialAppState";
const AppReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_STATE":
      return {
        ...initialAppState,
      };
    case "GET_COUNTRY_DATA":
      return action.countryData;
    case "SET_COUNTRY":
      return {
        ...state,
        currentCountry:
          state.countries[Math.floor(Math.random() * state.countries.length)],
      };
    case "GET_OPTIONS":
      return {
        ...state,
        options: getOptions(state.countries, state.currentCountry),
      };
    case "REMOVE_COUNTRY":
      return {
        ...state,
        countries: state.countries.filter((country) => {
          return country.name !== action.payload.name;
        }),
      };
    case "SET_ERROR":
      return {
        ...state,
        error: "TRY AGAIN",
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: undefined,
      };
    case "ADD_TO_SCORE":
      return {
        ...state,
        score: state.score + 1,
      };
    case "STRIKE":
      const newStrikes = [...state.strikes];
      newStrikes.push("X");
      return {
        ...state,
        strikes: newStrikes,
      };
    case "OPEN_ALERT":
      const newAlertState = true;
      return {
        ...state,
        openAlert: newAlertState,
      };
    case "CLOSE_ALERT":
      const setAlertState = false;
      return {
        ...state,
        openAlert: setAlertState,
      };
    case "SET_STATUS_PLAYING":
      const playing = "playing";
      return {
        ...state,
        status: playing,
      };
    case "CLEAR_STATUS":
      const clear = undefined;
      return {
        ...state,
        status: clear,
      };
    case "SET_STATUS_LOST":
      return {
        ...state,
        status: "lost",
      };
    case "SET_STATUS_SUBMIT":
      return {
        ...state,
        status: "submit",
      };
    case "SUBMIT_SCORE":
      const newLeaderBoard = [...state.leaderBoard];
      newLeaderBoard.push(action.payload.newEntry);
      return {
        ...state,
        leaderBoard: newLeaderBoard,
      };
    case "GET_LEADERS":
      const leaders = JSON.parse(localStorage.getItem("leaders"));
      if (leaders) {
        return {
          ...state,
          leaderBoard: [...leaders],
        };
      }
    default:
      return state;
  }
};

export default AppReducer;
