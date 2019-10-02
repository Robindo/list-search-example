import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ExampleResult from './ExampleResult';
import { NoResults } from './ExampleStyle';

class ExampleResults extends Component {
  render() {
    const { results, t } = this.props;

    if (results.length === 0) return <NoResults>{t('no_results')}</NoResults>;

    return (
      <Fragment>
        {results.map((item, i) => (
          <ExampleResult key={i} content={item} />
        ))}
      </Fragment>
    );
  }
}

ExampleResults.propTypes = {
  results: PropTypes.array
};

const mapState = state => ({
  results: state.data.list || []
});

export default withTranslation()(
  connect(
    mapState,
    null
  )(ExampleResults)
);
