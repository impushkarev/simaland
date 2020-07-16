import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from 'state'
import './index.scss';

import HOME from 'pages/HOME'
import LOGIN from 'pages/LOGIN'
import LOGOUT from 'pages/LOGOUT'
import PROFILE from 'pages/PROFILE'
import GALLERY from 'pages/GALLERY'
import ANY from 'pages/ANY'

import Header from 'components/Header'
import Footer from 'components/Footer'


const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Switch>

          <Route exact path="/">
            <HOME />
          </Route>

          <Route exact path="/gallery">
            <GALLERY />
          </Route>

          <Route exact path="/profile">
            <PROFILE />
          </Route>

          <Route exact path="/login">
            <LOGIN />
          </Route>

          <Route exact path="/logout">
            <LOGOUT />
          </Route>
          
          <Route path="*">
            <ANY />
          </Route>

        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);