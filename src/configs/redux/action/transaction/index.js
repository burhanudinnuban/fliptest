import {
  reducerFailed,
  reducerRequest,
  reducerSuccess,
} from '../../../../constants';

export const didTransaction = () => ({
  type: reducerRequest.DATA_TRANSACTION_REQUEST,
});

export const didTransactionSuccess = value => ({
  type: reducerSuccess.DATA_TRANSACTION_SUCCESS,
  value,
});

export const didTransactionFailed = value => ({
  type: reducerFailed.DATA_TRANSACTION_FAILED,
  value,
});
