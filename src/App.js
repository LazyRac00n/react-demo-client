import React from 'react';
import Navbar from './components/Home/Navbar';
import './App.css';
import Home from './components/Home/Home';
import Products from './components/Home/Products';
import Ins from './components/Ins';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/index.html' component={Home} />
          <Route path='/' exact component={Home} />
          <Route path='/Ins' exact component={Ins} />
          <Route path='/Products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
