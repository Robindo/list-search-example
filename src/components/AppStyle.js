import styled from 'styled-components';

const Row = styled('div')`
  display: flex;
`;

const Col = styled('div')`
    justify-content: flex-start;
    min-width: ${props => (props.head ? '200' : '0')}px;
    font-weight: ${props => (props.head ? 600 : 0)};
    text-transform: ${props => (props.head ? 'capitalize' : '')};
    flex-direction${props => (props.vertical ? 'column' : 'row')};
    font-size: ${props => (props.fontSize ? props.fontSize : 1)}rem;
    margin: 0;
    width: 100%;
`;

export { Row, Col };
