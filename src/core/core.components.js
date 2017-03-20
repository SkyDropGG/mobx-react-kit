import React, {Component} from 'react'
import {Router, browserHistory} from 'react-router';
import {observable} from 'mobx';
import {Provider, observer, inject} from 'mobx-react';

import routes from '../routes';
@inject('stores') @observer
class CoreComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.stores.getStores);
    return (
      <Provider {...this.props.stores.getStores}>
      <Router routes={routes} history={browserHistory}>
      </Router>
    </Provider>
    );
  }
}

export default CoreComponent;
