import styled from 'styled-components';

const Wrapper = styled('div')`
display: flex;
flex-direction: column;
margin: 0 1rem;
min-width: 320px;
width: auto;

@media screen and (min-width: 768px) {
  margin: auto;
  width: 600px;
}
`;

export default Wrapper;
