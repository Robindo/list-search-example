import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDetails } from '../../actions/postActions';
import { Form, Header, Fields, Input, Button } from './ExampleFormStyle';

class ExampleFormFields extends Component {
  state = {
    searchValue: ''
  };

  onChange = e => this.setState({ searchValue: e.target.value });

  onKeyUp = e => {
    e.key === 'Enter' ? this.props.getDetails(this.state.searchValue) : null;
  };

  onClick = () => this.props.getDetails(this.state.searchValue);

  render = () => {
    return (
      <Form>
        <Header>Which music genre are you searching for?</Header>
        <Fields>
          <Input
            type='text'
            name='search'
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
          <Button type='button' onClick={this.onClick}>
            send
          </Button>
        </Fields>
      </Form>
    );
  };
}

ExampleFormFields.propTypes = {
  getDetails: PropTypes.func.isRequired
};

const mapDispatch = dispatch => ({
  getDetails: query => dispatch(fetchDetails(query))
});

export default connect(
  null,
  mapDispatch
)(ExampleFormFields);
