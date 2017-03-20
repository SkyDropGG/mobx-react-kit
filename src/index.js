require('./styles/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import CoreComponent from './core/core.components';
import HomeStore from './features/home.component/home.store';
import Stores from './core/stores';
const storesObj = Stores.getInstance();
storesObj.inject('homeStore', new HomeStore());
ReactDOM.render(
  <AppContainer>
    <CoreComponent stores={storesObj} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./core/core.components', () => {
    ReactDOM.render(
      <AppContainer>
        <CoreComponent stores={Stores}/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}