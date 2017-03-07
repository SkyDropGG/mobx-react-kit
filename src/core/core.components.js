import React, {Component} from 'react'
import {Router, browserHistory} from 'react-router';
import {Provider} from 'mobx-react';

import routes from '../routes';
import HomeStore from '../features/home.component/home.store';

const CoreComponent = () => {
  return (
    <Provider
      homeStore={new HomeStore()}
    >
      <Router routes={routes} history={browserHistory}>
      </Router>
    </Provider>
  )
};

export default CoreComponent;
