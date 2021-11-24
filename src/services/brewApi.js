import axios from "axios";

export const getBrewSearchData = (toFind) => axios.get(`https://api.openbrewerydb.org/breweries/search?query=${toFind}`);
