import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Item from './components/Item';
import Items from './components/Items';


const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/About' component={About} />
    <Route exact path='/Item' component={Item} />
    <Route exact path='/Items' component={Items} />

    <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
