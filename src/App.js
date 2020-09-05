import React, { Component } from 'react';
import Home from './containers/Home/Home';
import classes from './App.module.css';
import {Switch, Route, Redirect} from 'react-router-dom';
class App extends Component {


  render(){
    let pageToRender = (
      <Switch>
        <Route path='/home' component={Home}/>
        <Redirect from='/' to='/home'/>
      </Switch>
    )
    return (
      <div className={classes.App}>
        {pageToRender}
      </div>
    );
  }
}

export default App;
