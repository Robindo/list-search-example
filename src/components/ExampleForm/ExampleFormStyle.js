import styled from 'styled-components';

const Form = styled('div')`
  color: #cb4b20;
  display: flex;
  flex-direction: column;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  margin: 2rem 0;
`;

const Header = styled('h1')`
  font-size: 20px;
`;

const Fields = styled('div')`
  margin: 1rem 0 0 0;
  display: flex;
`;

const Input = styled('input')`
  border: 0;
  border-bottom: 1px solid #cb4b20;
  border-radius: 5px;
  color: #cb4b20;
  font-size: 16px;
  font-weight: 600;
  padding: 5px 10px;
  outline: none;
  text-transform: capitalize;
`;

const Button = styled('button')`
  background: #fff;
  border: 1px solid #cb4b20;
  border-radius: 3px;
  color: #cb4b20;
  font-size: 16px;
  margin: 0 0 0 1rem;
  padding: 10px 15px;
  outline: none;

  &:hover {
    background-color: #cb4b20;
    cursor: pointer;
    color: #fff;
  }
`;

export { Form, Header, Fields, Input, Button };
