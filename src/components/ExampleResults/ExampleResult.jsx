import React from 'react';
import { useTranslation } from "react-i18next";
import { Genre, Title, Description } from './ExampleStyle';

const ExampleResult = ({ content }) => {
  const { t, i18n } = useTranslation();

  return (
    <Genre>
      <Title>{content.title}</Title>
      <Description>{t(content.description[i18n.language])}</Description>
    </Genre>
  );
}

export default ExampleResult;
