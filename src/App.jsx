import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import MainPage from './components/pages/MainPage';

const App = () => (
  <Provider store={store}>
    <div>
      <MainPage />
    </div>
  </Provider>
);

export default App;
