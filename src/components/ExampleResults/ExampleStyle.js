import styled from 'styled-components';

const Genre = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin: 2rem 0;
`;

const Title = styled('h1')`
  font-color: #ccc;
`;

const Description = styled('p')`
  margin: 1rem 0 0 0;
`;

export { Genre, Title, Description };
