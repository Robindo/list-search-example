export const getApiDetails = query =>
  fetch(`http://localhost:8081/genres?q=${query}`).then(response =>
    !query || query === '' ? [] : response.json()
  );
