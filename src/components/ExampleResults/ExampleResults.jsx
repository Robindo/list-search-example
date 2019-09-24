import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExampleResult from './ExampleResult';

class ExampleResults extends Component {
  render() {
    const { results } = this.props;

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

export default connect(
  mapState,
  null
)(ExampleResults);
