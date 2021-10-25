import {call, put, take} from 'redux-saga/effects';
import {reducerRequest} from '../../../../constants/reducer';
import {showError} from '../../../../utils';
import {didTransactionFailed, didTransactionSuccess} from '../../action';
import {listTransaction} from '../../request/transaction';

export function* getTransactionFlow() {
  while (true) {
    yield take(reducerRequest.DATA_TRANSACTION_REQUEST);
    try {
      let data = [];
      const response = yield call(listTransaction);
      const keys = Object.keys(response.data);
      keys.forEach((key, index) => {
        data.push(response.data[key]);
      });
      yield put(didTransactionSuccess(data));
    } catch (error) {
      // console.log((error.response && error.response.data) || error.message);
      const {message} = (error.response && error.response.data) || error.message;
      showError(message);
      yield put(didTransactionFailed(message));
    }
  }
}
