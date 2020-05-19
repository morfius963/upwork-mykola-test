import { combineReducers } from 'redux';
import goodsReducer from './goods/goods-reducer';

const rootReducer = combineReducers({
  goodsReducer,
});

export default rootReducer;
