import React from "react";
import { useContext } from "react";
import AppContext from "./context/app-context";
const Flag = () => {
  const { state, dispatch } = useContext(AppContext);
  const code = state.currentCountry.code.toLowerCase();
  const img = require(`./assets/flags/${code}.png`);
  return <img className="bckgrnd" src={img}></img>;
};
export default Flag;
