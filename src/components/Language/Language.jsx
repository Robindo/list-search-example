import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Languages } from './LanguageStyle';

class Language extends Component {
    setLanguage = lang => {
        const { i18n } = this.props;
        i18n.changeLanguage(lang);
    }

    render() {
        const { t } = this.props;

        return (
            <Languages>
                <li onClick={() => this.setLanguage('nl')}>[{t('dutch')}]</li>
                <li onClick={() => this.setLanguage('en')}>[{t('english')}]</li>
            </Languages>
        );
    }
}

export default withTranslation()(Language);