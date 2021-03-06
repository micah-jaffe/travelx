import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Router from './Router';

const Root = ({ store }) => (
   // <Provider store={store}>
   <Provider store={store}>
      <HashRouter>
         <Router />
      </HashRouter>
   </Provider>
);

export default Root;
