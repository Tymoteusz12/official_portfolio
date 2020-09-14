import React, { Component } from 'react';
import Home from './containers/Home/Home';
import classes from './App.module.css';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation';
import Skills from './containers/Skills/Skills';
import Hire from './containers/Hire/Hire';
import {pageTransition} from './shared/transitionClasses';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
class App extends Component {


  render(){
    let pageToRender = (
      <TransitionGroup>
        <CSSTransition 
          key={this.props.location.pathname}
          classNames={pageTransition}
          timeout = {0}>
          <Switch>
            <Route path='/Start' component={Home}/>
            <Route path='/Skills' component={Skills}/>
            <Route path='/Hire' component={Hire}/>
            <Redirect from='/' to='/Start'/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      
    )
    return (
      <div className={classes.App}>
        <Navigation lang={'PL'}/>
        {pageToRender}
      </div>
    );
  }
}

export default withRouter(App);
