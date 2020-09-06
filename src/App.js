import React, { Component } from 'react';
import Home from './containers/Home/Home';
import classes from './App.module.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation';
import Skills from './containers/Skills/Skills';
class App extends Component {


  render(){
    let pageToRender = (
      <Switch>
        <Route path='/Start' component={Home}/>
        <Route path='/Skills' component={Skills}/>
        <Redirect from='/' to='/Start'/>
      </Switch>
    )
    return (
      <div className={classes.App}>
        <Navigation lang={'PL'}/>
        {pageToRender}
      </div>
    );
  }
}

export default App;
