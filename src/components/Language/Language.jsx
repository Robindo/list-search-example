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
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
  };

  render() {
    const { t } = this.props;

    return (
      <Languages>
        <li onClick={() => this.setLanguage('nl')}>
          <Svg src={nld} width="25" />
        </li>
        <li onClick={() => this.setLanguage('en')}>
          <Svg src={gbr} width="25" />
        </li>
      </Languages>
    );
  }
}

export default withTranslation()(Language);
