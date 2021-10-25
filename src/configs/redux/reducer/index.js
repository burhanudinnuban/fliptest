import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import transaction from './transaction';

const reducer = {transaction: transaction};

const configReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['transaction'],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;
