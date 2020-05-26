import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from "./Header";
import history from "../history";
import { useAuth0 } from "../react-auth0-spa";
import logo from '../logo.svg';
import { Counter } from '../features/counter/Counter';
import './App.css';

import BSoftList from './BSoftList';
import BSoftCreate from './BSoftCreate';
import BSoftEdit from './BSoftEdit';
import BSoftDelete from './BSoftDelete';
import BSoftShow from './BSoftShow';



function App() {
  const { loading } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={BSoftList} />
            <Route path="/bsoft/new" exact component={BSoftCreate} />
            <Route path="/bsoft/edit/:id" exact component={BSoftEdit} />
            <Route path="/bsoft/delete/:id" exact component={BSoftDelete} />
            <Route path="/bsoft/:id" exact component={BSoftShow} />
          </Switch>
        </div>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
