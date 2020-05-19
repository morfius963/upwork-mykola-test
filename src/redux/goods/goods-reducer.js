import { CHANGE_COUNT, REMOVE_GOOD, REFRESH_DATA } from './actionTypes';
import { generateData, changeItemCount, removeArrayItem } from '../../utils';

const initialState = {
  goods: generateData(),
};

const goodsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case CHANGE_COUNT: {
      const { id, count } = action.payload;
      return {
        goods: changeItemCount(state.goods, id, count),
      };
    }

    case REMOVE_GOOD: {
      const { id } = action.payload;
      return {
        goods: removeArrayItem(state.goods, id),
      };
    }

    case REFRESH_DATA: {
      return {
        goods: generateData(),
      };
    }

    default: {
      return state;
    }
  }
};

export default goodsReducer;
