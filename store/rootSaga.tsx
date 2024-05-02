import { all, fork } from "redux-saga/effects";
import watchGetUser from "@/store/saga/saga";

const rootSaga = function* () {
  yield all([fork(watchGetUser)]);
};

export default rootSaga;
