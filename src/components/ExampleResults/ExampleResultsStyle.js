import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

const Genre = styled('div')`
  color: #a4a4a4;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin: 2rem 0;
`;

const Title = styled('h1')`
  color: #cb4b20;
`;

const Description = styled('p')`
  margin: 1rem 0 0 0;
`;

const NoResultsWrapper = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const NoResults = styled('div')`
  color: #cb4b20;
  font-size: 15px;
`;

const IconsLinks = styled('div')`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0 0 0;
`;

const Svg = styled(SVG)`
  fill: #cb4b20;
  transition: 0.5s;

  &:hover {
    fill: #a4a4a4;
  }
`;

const IconLink = styled(Link)`
  display: flex;
  align-self: flex-end;
  margin: 0 0 0 0.8rem;
`;

const SimpleLink = styled('a')`
  display: flex;
  align-self: flex-end;
  margin: 0 0 0 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonLink = styled(Link)`
  align-content: center;
  align-self: flex-end;
  background: #fff;
  border: 1px solid #cb4b20;
  border-radius: 3px;
  color: #cb4b20;
  cursor: pointer;
  display: flex;
  font-size: 0.6rem;
  height: 1rem;
  justify-content: center;
  margin: 0;
  outline: none;
  padding: 5px 7px;
  text-decoration: none;
  top: 0;
  transition: 0.5s;
  width: 7rem;

  &:hover {
    color: #a4a4a4;
    border: 1px solid #a4a4a4;
  }

  &:hover > svg {
    fill: #a4a4a4;
  }
`;

export {
  Genre,
  Title,
  Description,
  NoResultsWrapper,
  NoResults,
  IconsLinks,
  IconLink,
  SimpleLink,
  Svg,
  ButtonLink
};
