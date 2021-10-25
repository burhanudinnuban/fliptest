import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import reducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import {rootSagas} from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

export {store, persistor};
sagaMiddleware.run(rootSagas);
