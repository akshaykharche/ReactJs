import { put, call } from 'redux-saga/effects';
import flickrImages from '../Api/api';

export default function* searchMediaSaga({ payload }) {
  try {
    const images = yield call(flickrImages, payload);;
    yield [ put({ type: 'SELECTED_COURSE', image: images })];
  } catch (error) {
    console.log(error);
  }
}
