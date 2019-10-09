import styled from 'styled-components';

const Header = styled('h1')`
  font-size: 20px;
`;

const Form = styled('div')`
  color: #cb4b20;
  display: flex;
  flex-direction: column;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  margin: 2rem 0;
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
  transition: 0.5s;

  &:hover {
    color: #a4a4a4;
    border-color: #a4a4a4;
  }
`;

const Button = styled('button')`
  background: #fff;
  border: 1px solid #cb4b20;
  border-radius: 3px;
  color: #cb4b20;
  font-size: 16px;
  margin: 0 0 0 1rem;
  padding: 10px 20px;
  outline: none;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    color: #a4a4a4;
    border: 1px solid #a4a4a4;
  }

  &:hover + &:hover {
    color: #a4a4a4;
    border: 1px solid #a4a4a4;
  }
`;

export { Header, Form, Fields, Input, Button };
