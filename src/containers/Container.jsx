import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Language from '../components/Language/Language';
import Example from './Example';
import ExampleDetails from '../components/ExampleDetails/ExampleDetails';
import Wrapper from './ContainerStyle';

const Container = () => (
  <Router>
    <Wrapper>
      <Language />
      <Switch>
        <Route path="/" exact component={Example} />
        <Route path="/details/:id?" component={ExampleDetails} />
      </Switch>
    </Wrapper>
  </Router>
);

export default Container;
