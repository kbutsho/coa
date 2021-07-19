import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FlowChart from './Components/FlowChart/FlowChart';
import AssCode from './Components/AssCode/AssCode';
import CodeSection from './Components/CodeSection/CodeSection';
import CodeRun from './Components/CodeRun/CodeRun';
import Home from './Components/Home/Home';
import AboutGroup from './Components/AboutGroup/AboutGroup';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <AboutGroup></AboutGroup>
          </Route>
          <Route path="/flowChart">
            <FlowChart></FlowChart>
          </Route>
          <Route path="/assCode">
            <AssCode></AssCode>
          </Route>
          <Route path="/codeSection">
            <CodeSection></CodeSection>
          </Route>
          <Route path="/codeRun">
            <CodeRun></CodeRun>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;