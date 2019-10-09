import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled('h1')`
  color: #cb4b20;
  font-size: 20px;
`;

const FormFields = styled('div')`
  align-content: space-around;
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Buttons = styled('div')`
  display: flex;
  justify-content: flex-end;

  button {
    margin: 0 0 1rem 0;
  }
`;

const Label = styled('label')`
  color: #cb4b20;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 1rem 0;
  width: 15rem;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const TextInput = styled('input')`
  border: 1px solid #cb4b20;
  border-radius: 3px;
  color: #cb4b20;
  font-size: 14px;
  padding: 5px 10px;
  outline: none;
  text-transform: capitalize;
  transition: 0.5s;
  width: 100%;

  &:hover {
    color: #a4a4a4;
    border-color: #a4a4a4;
  }
`;

const TextArea = styled('textarea')`
  border: 1px solid #cb4b20;
  border-radius: 3px;
  color: #cb4b20;
  font-size: 14px;
  padding: 5px 10px;
  outline: none;
  transition: 0.5s;
  width: 100%;

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
  padding: 10px 15px;
  outline: none;
  transition: 0.5s;
  float: right;
  display: flex;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
    color: #a4a4a4;
    border-color: #a4a4a4;
  }
`;

const CancelLink = styled(Link)`
  align-items: center;
  justify-items: center;
  color: #cb4b20;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  margin: 0 1rem 1rem 0;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: #a4a4a4;
  }
`;

export {
  Header,
  FormFields,
  Buttons,
  Label,
  TextInput,
  TextArea,
  Button,
  CancelLink
};
