import styled from 'styled-components';

const Form = styled('div')`
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
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px 10px;
  outline: none;
`;

const Button = styled('button')`
  background: #000;
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  margin: 0 0 0 1rem;
  padding: 10px 15px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export { Form, Header, Fields, Input, Button };
