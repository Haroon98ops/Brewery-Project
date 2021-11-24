import { getBrewSearchData } from "../services/brewApi";

export const fetchSearchData = (str) => async (dispatch) => {
  const { data } = await getBrewSearchData(str);
  dispatch({
    type: "STORE_DATA_AFTER_SERACH",
    payload: data,
  });
};
