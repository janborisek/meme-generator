import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Login from './components/Login';
import Footer from './components/Footer';
import Error from './components/Error'

import Data from './api/defaultData';
import Details from './components/Details';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = Data;
    console.log(this.state);
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Main {...this.state} />} />
            <Route exact path="/details:id" render={() => <Details {...this.state} />} />
            <Route exact path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router >
    );
  }
}

export default App;
