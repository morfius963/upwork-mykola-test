import { CHANGE_COUNT, REMOVE_GOOD, REFRESH_DATA } from './actionTypes';

export const changeCount = (id, count) => ({
  type: CHANGE_COUNT,
  payload: {
    id,
    count,
  },
});

export const removeGood = (id, count) => ({
  type: REMOVE_GOOD,
  payload: { id },
});

export const refreshData = () => ({
  type: REFRESH_DATA,
});
