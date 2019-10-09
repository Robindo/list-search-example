import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Genre,
  Title,
  Description,
  IconLink,
  IconsLinks,
  SimpleLink,
  Svg
} from './ExampleResultsStyle';
import edit from '../../assets/images/edit.svg';
import add from '../../assets/images/add.svg';
import remove from '../../assets/images/remove.svg';
import locked from './locked';

const ExampleResult = ({ content, onRemove }) => {
  const { t, i18n } = useTranslation();

  return (
    <Genre>
      <Title>{content.title}</Title>
      <Description>{t(content.description[i18n.language])}</Description>
      <IconsLinks>
        <IconLink to={`/details/${content.id}`} title={t('edit')}>
          <Svg src={edit} width="15" height="15" />
        </IconLink>
        <IconLink to="/details" title={t('add_new')}>
          <Svg src={add} width="15" height="15" />
        </IconLink>
        {!locked.includes(content.id) && (
          <SimpleLink onClick={() => onRemove(content.id)} title={t('remove')}>
            <Svg src={remove} width="15" height="15" />
          </SimpleLink>
        )}
      </IconsLinks>
    </Genre>
  );
};

export default ExampleResult;
