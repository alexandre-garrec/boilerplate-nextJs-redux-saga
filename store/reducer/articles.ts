import { Article } from "@/interfaces/article";
import { actionTypes } from "../actions";
import { reducer } from "@/utils/reducer";
import { ERROR, LOADING, SUCCESS } from "@/utils/status";

const initialState = {
  data: [],
  status: "",
};

const articles = reducer(initialState, {
  [actionTypes.LOAD_DATA]: (state: any) => ({
    ...state,
    status: LOADING,
  }),
  [actionTypes.LOAD_DATA_SUCCESS]: (state: any, payload: Array<Article>) => ({
    ...state,
    data: payload,
    status: SUCCESS,
  }),

  [actionTypes.FAILURE]: (state: any) => ({
    ...state,
    status: ERROR,
  }),
});

export default articles;
