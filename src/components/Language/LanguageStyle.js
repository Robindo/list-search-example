import styled from 'styled-components';

const Languages = styled('ul')`
  align-self: flex-end;
  display: flex;
  color: #a4a4a4;
  font-size: 0.8rem;
  margin: 0;
  padding: 1rem 0;
  list-style-type: none;

  li {
    float: left;
  }

  li:hover {
    cursor: pointer;
  }
`;

export { Languages };
