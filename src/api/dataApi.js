export const getApiDetails = query =>
  fetch(`http://localhost:8081/genres?q=${query}`).then(response =>
    !query || query === '' ? [] : response.json()
  );

export const getApiDetailsById = id =>
  fetch(`http://localhost:8081/genres?id=${id}`).then(response =>
    response.json()
  );

export const postApiDetails = data =>
  fetch(`http://localhost:8081/genres`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());

export const deleteApiDetailsById = id =>
  fetch(`http://localhost:8081/genres/${id}`, {
    method: 'delete'
  }).then(response => response.json());
