import countryData from "../countryData";
export const initialAppState = {
  countries: [...countryData],
  currentCountry: countryData[Math.floor(Math.random() * countryData.length)],
  options: [],
  error: undefined,
  strikes: [],
  score: 0,
  openAlert: false,
  status: undefined,
};
