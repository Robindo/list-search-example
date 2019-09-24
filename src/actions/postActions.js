import { FETCH_DETAILS, FETCH_LIST } from '../types/postTypes';
import { getApiDetails } from '../api/dataApi';

export const fetchDetails = query => dispatch =>
  getApiDetails(query)
    .then(response => {
      //  set result to Redux
      dispatch({
        type: FETCH_DETAILS,
        payload: response
      });
      //  Because the root reducer key is set to 'data'
      return response.data;
    })
    .catch(error => console.error(error));
