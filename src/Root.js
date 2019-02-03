import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';

import ContextExample from './components/ContextExample';

export default () => {
    return (   
          <Router>
            <Switch>          
              <Route path="/" exact component={App} />
              <Route path="/context" component={ContextExample} />
            </Switch>
          </Router>
    )}
