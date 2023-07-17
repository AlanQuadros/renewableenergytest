import {createStore} from 'redux';
import appReducer from './ducks';

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const store = createStore(rootReducer);

export default store;
