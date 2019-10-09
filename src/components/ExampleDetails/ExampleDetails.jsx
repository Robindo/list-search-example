import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { postDetails } from '../../actions/postActions';
import { getDetailsById } from '../../actions/getActions';
import {
  Header,
  FormFields,
  Buttons,
  Label,
  TextInput,
  TextArea,
  Button,
  CancelLink
} from './ExampleDetailsStyle';

class ExampleDetails extends Component {
  state = {
    title: '',
    description_nl: '',
    description_en: ''
  };

  componentDidMount = () => {
    const {
      match: {
        params: { id }
      },
      details
    } = this.props;

    //  Note: in case of usage of Formik or Redux-Form this should be as initial values
    if (
      Object.entries(details).length === 0 &&
      details.constructor === Object &&
      id
    ) {
      this.props.getItem(id).then(response => {
        this.setState({
          title: response.title,
          description_nl: response.description.nl,
          description_en: response.description.en
        });
      });
      return;
    }
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onClick = () => {
    const { title, description_nl, description_en } = this.state;

    const data = {
      title,
      description: {
        nl: description_nl,
        en: description_en
      }
    };

    this.props.addItem(data).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    const { t } = this.props;
    const { title, description_nl, description_en } = this.state;

    return (
      <Fragment>
        <Header>{t('title_page_item')}</Header>
        <form>
          <FormFields>
            <Label>{t('genre')}</Label>
            <TextInput
              type="text"
              name="title"
              className="input-title"
              value={title}
              onChange={this.handleInputChange}
            />
          </FormFields>
          <FormFields>
            <Label>{t('dutch')}</Label>
            <TextArea
              value={description_nl}
              name="description_nl"
              className="textarea-nl"
              onChange={this.handleInputChange}
              rows="6"
            />
          </FormFields>
          <FormFields>
            <Label>{t('english')}</Label>
            <TextArea
              value={description_en}
              name="description_en"
              className="textarea-en"
              rows="6"
              onChange={this.handleInputChange}
            />
          </FormFields>

          <Buttons>
            <CancelLink className="button-go-back" to="/">
              {t('cancel')}
            </CancelLink>
            <Button
              type="button"
              className="button-submit"
              onClick={this.onClick}
            >
              {t('save')}
            </Button>
          </Buttons>
        </form>
      </Fragment>
    );
  }
}

const mapState = (state, props) => ({
  details: props.id ? state.details.title[props.id] : {}
});

const mapDispatch = dispatch => ({
  addItem: formData => dispatch(postDetails(formData)),
  getItem: id => dispatch(getDetailsById(id))
});

export default withTranslation()(
  withRouter(
    connect(
      mapState,
      mapDispatch
    )(ExampleDetails)
  )
);
