import React from 'react';
import ExampleFormFields from '../components/ExampleForm/ExampleFormFields';
import ExampleResults from '../components/ExampleResults/ExampleResults';
import { Wrapper } from './ContainerStyle';
import Language from '../components/Language/Language';

const Container = () => (
  <Wrapper>
    <Language />
    <ExampleFormFields />
    <ExampleResults />
  </Wrapper>
);

export default Container;
