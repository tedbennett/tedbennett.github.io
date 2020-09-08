import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import Home from '../Home/Home';
import Ideas from '../Ideas/Ideas';
import { Fridgy, SwitchIt, Kaja } from '../Projects/Projects';

const App: React.FC = () => (
  <div>
    <NavigationBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/fridgy">
        <Fridgy />
      </Route>
      <Route exact path="/switch-it">
        <SwitchIt />
      </Route>
      <Route exact path="/kaja">
        <Kaja />
      </Route>
      <Route exact path="/blog">
        <h1>Blog</h1>
      </Route>
      <Route exact path="/ideas">
        <Ideas />
      </Route>
      {/* <Redirect to="/" /> */}
    </Switch>
  </div>
);

export default App;
