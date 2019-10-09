import { ADD_DETAILS } from '../types/reducerTypes';
import { postApiDetails } from '../api/dataApi';

export const postDetails = data => dispatch =>
  postApiDetails(data)
    .then(response => {
      dispatch({
        type: ADD_DETAILS,
        payload: response
      });
      return response.data;
    })
    .catch(error => console.error(error));
