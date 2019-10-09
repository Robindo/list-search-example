import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import ExampleResult from './ExampleResult';
import {
  NoResultsWrapper,
  NoResults,
  ButtonLink,
  Svg
} from './ExampleResultsStyle';
import { removeDetailsById } from '../../actions/deleteActions';
import add from '../../assets/images/add.svg';

class ExampleResults extends Component {
  onRemove = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { results, t } = this.props;

    return (
      <Fragment>
        {results.length === 0 && (
          <NoResultsWrapper>
            <NoResults>{t('no_results')}</NoResults>
            <ButtonLink className="button-add-new-item" to="/details">
              {t('add_new')}
              {`  `}
              <Svg src={add} width="15" height="15" />
            </ButtonLink>
          </NoResultsWrapper>
        )}
        {results.length > 0 &&
          results.map((item, i) => (
            <ExampleResult key={i} content={item} onRemove={this.onRemove} />
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

const mapDispatch = dispatch => ({
  deleteItem: id => dispatch(removeDetailsById(id))
});

export default withTranslation()(
  withRouter(
    connect(
      mapState,
      mapDispatch
    )(ExampleResults)
  )
);
