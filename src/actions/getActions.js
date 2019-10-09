import { GET_LIST, GET_DETAILS } from '../types/reducerTypes';
import { getApiDetails, getApiDetailsById } from '../api/dataApi';

export const getAllDetails = query => dispatch =>
  getApiDetails(query)
    .then(response => {
      //  set result to Redux
      dispatch({
        type: GET_LIST,
        payload: response
      });
      //  Because the root reducer key is set to 'data'
      return response.data;
    })
    .catch(error => console.error(error));

export const getDetailsById = id => dispatch =>
  getApiDetailsById(id)
    .then(response => {
      dispatch({
        type: GET_DETAILS,
        payload: response
      });
      return response[0];
    })
    .catch(error => console.error(error));
