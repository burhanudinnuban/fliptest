import {all} from 'redux-saga/effects';
import {getTransactionFlow} from '../handler/transaction';

export function* rootSagas() {
  yield all([getTransactionFlow()]);
}
