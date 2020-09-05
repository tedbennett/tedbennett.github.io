import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import Home from '../Home/Home';
import { Fridgy, SwitchIt, Kaja } from '../Projects/Projects';

class App extends React.Component {
  componentDidMount() {
    document.body.className = 'bg-dark';
  }

  render() {
    return (
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
            <h1>Ideas</h1>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
