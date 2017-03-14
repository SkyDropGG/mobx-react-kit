import React, {Component} from 'react'
import {Router, browserHistory} from 'react-router';
import {Provider} from 'mobx-react';

import routes from '../routes';
import HomeStore from '../features/home.component/home.store';
import Stories from './stores';

Stories.inject('home', new HomeStore());
console.log(Stories);
const CoreComponent = () => {
  return (
    <Provider
      stores={Stories.stores}
    >
      <Router routes={routes} history={browserHistory}>
      </Router>
    </Provider>
  )
};

export default CoreComponent;
