require('./styles/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import CoreComponent from './core/core.components';


ReactDOM.render(
  <AppContainer>
    <CoreComponent/>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./core/core.components', () => {
    ReactDOM.render(
      <AppContainer>
        <CoreComponent/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}