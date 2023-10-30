import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import saga from '../sagas';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authenticationReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware);
  if (__DEV__) {
    // middleware = applyMiddleware(logger, sagaMiddleware);
  }
  const store = createStore(persistedReducer, compose(middleware));
  sagaMiddleware.run(saga);
  return store;
};

const store = configureStore();
const persistor = persistStore(store);
persistor.pause();

export {store, persistor};
