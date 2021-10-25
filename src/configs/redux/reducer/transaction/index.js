import {
  reducerFailed,
  reducerRequest,
  reducerSuccess,
} from '../../../../constants';

const initialStateRoot = {
  dataTransactionRequest: undefined,
  dataTransactionSuccess: undefined,
  dataTransactionFailed: undefined,
  dataTransactionLoading: false,
};

const transaction = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducerRequest.DATA_TRANSACTION_REQUEST:
      return {
        ...state,
        dataTransactionRequest: action.value,
        dataTransactionLoading: true,
      };
    case reducerSuccess.DATA_TRANSACTION_SUCCESS:
      return {
        ...state,
        dataTransactionSuccess: action.value,
        dataTransactionLoading: false,
      };
    case reducerFailed.DATA_TRANSACTION_FAILED:
      return {
        ...state,
        dataTransactionFailed: action.value,
        dataTransactionLoading: false,
      };
    default:
      return state;
  }
};

export default transaction;
