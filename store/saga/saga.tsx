import { all, put, takeLatest } from "redux-saga/effects";
import { actionTypes, failure, loadDataSuccess } from "@/store/actions";
import { getArticlesWithQuery, getArticles } from "@/api/article";
import { IterableIterator } from "@/interfaces/saga";

function* loadDataSaga({
  payload,
}: {
  payload?: string;
}): IterableIterator<number, string> {
  try {
    const res = yield fetch(
      payload ? getArticlesWithQuery(payload) : getArticles()
    );

    const data = yield res.json();

    yield put(loadDataSuccess(data.articles));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
