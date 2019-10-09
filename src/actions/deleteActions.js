import { REMOVE_DETAILS } from '../types/reducerTypes';
import { deleteApiDetailsById } from '../api/dataApi';

export const removeDetailsById = id => dispatch =>
  deleteApiDetailsById(id)
    .then(() => {
      dispatch({
        type: REMOVE_DETAILS,
        payload: id
      });
    })
    .catch(error => console.error(error));
