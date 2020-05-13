import {CHANGE_SEARCH_FIELD} from "./Constants";

export const setSearchField = (filter) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: filter
});
