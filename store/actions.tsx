import { Article } from "@/interfaces/article";

export const actionTypes = {
  FAILURE: "FAILURE",
  LOAD_DATA: "LOAD_DATA",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
};

export function failure(error: any) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function loadData(text?: string) {
  return { type: actionTypes.LOAD_DATA, payload: text };
}

export function loadDataSuccess(data: Array<Article>) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    payload: data,
  };
}
