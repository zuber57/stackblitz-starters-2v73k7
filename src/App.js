import React from 'react';
import './style.css';
import 'tailwindcss/tailwind.css';
import {Navbar} from './components/Navbar';
import {Bor} from './components/Bor';
import {About} from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router >
      <Navbar title="Text Analyziser" />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <div className="container flex items-center justify-center my-10">
            <Bor />
          </div>
          </Route>
        </Switch>
    </Router>
    </>
  );
}
export default App;