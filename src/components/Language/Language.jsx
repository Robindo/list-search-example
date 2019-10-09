import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Languages, Svg } from './LanguageStyle';
import nld from '../../assets/images/NLD.svg';
import gbr from '../../assets/images/GBR.svg';

class Language extends Component {
  componentDidMount = () => {
    const { i18n } = this.props;
    if (['en-US', 'en-GB'].includes(i18n.language)) i18n.changeLanguage('en');
  };

  setLanguage = lang => {
    const { i18n, t } = this.props;
    i18n.changeLanguage(lang);
  };

  render() {
    const { t } = this.props;

    return (
      <Languages>
        <li onClick={() => this.setLanguage('nl')}>
          <a title={t('dutch')}>
            <Svg src={nld} width="25" />
          </a>
        </li>
        <li onClick={() => this.setLanguage('en')}>
          <a title={t('english')}>
            <Svg src={gbr} width="25" />
          </a>
        </li>
      </Languages>
    );
  }
}

export default withTranslation()(Language);
