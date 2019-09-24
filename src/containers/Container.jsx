import React from 'react';
import ExampleFormFields from '../components/ExampleForm/ExampleFormFields';
import ExampleResults from '../components/ExampleResults/ExampleResults';
import { Wrapper } from './ContainerStyle';

const Container = () => {
  return (
    <Wrapper>
      <ExampleFormFields />
      <ExampleResults />
    </Wrapper>
  );
};

export default Container;
