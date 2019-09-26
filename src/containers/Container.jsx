import React from 'react';
import { useTranslation } from 'react-i18next';
import ExampleFormFields from '../components/ExampleForm/ExampleFormFields';
import ExampleResults from '../components/ExampleResults/ExampleResults';
import { Wrapper } from './ContainerStyle';
import Language from '../components/Language/Language';

const Container = () => {
  //  set default translation
  const { i18n } = useTranslation();
  if (i18n.language === 'en-US') i18n.changeLanguage('en');

  return (
    <Wrapper>
      <Language />
      <ExampleFormFields />
      <ExampleResults />
    </Wrapper>
  );
};

export default Container;
