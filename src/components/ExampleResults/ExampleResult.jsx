import React from 'react';
import { Genre, Title, Description } from './ExampleStyle';

const ExampleResult = ({ content }) => (
  <Genre>
    <Title>{content.title}</Title>
    <Description>{content.description}</Description>
  </Genre>
);

export default ExampleResult;
