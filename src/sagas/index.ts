import { all } from 'redux-saga/effects';
import cotentSaga from './content';

function* rootSaga() {
    yield all([
      cotentSaga(),
    ]);
  }
  
  export default rootSaga;