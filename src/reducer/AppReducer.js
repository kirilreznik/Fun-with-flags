import getOptions from "../functions/getOptions";
const AppReducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default AppReducer;
