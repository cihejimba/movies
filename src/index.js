import Home from './home/home';
import Navbar from './navbar/navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import promiseMiddleware from 'redux-promise';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
import {FocusStyleManager} from '@blueprintjs/core';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import '@blueprintjs/core/dist/blueprint.css';
import './index.css';

FocusStyleManager.onlyShowFocusOnTabs();

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="pt-dark">
        <Route path="/" component={Navbar} />
        <div>
          <Route path="/" exact component={Home} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
