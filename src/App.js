import React, { Component } from 'react';
import classes from './App.module.css';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation';
import {pageTransition} from './shared/transitionClasses';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Spinner from './components/UI/Spinner';
import { Suspense } from "react";
import lazy from "react-lazy-with-preload";
const LazyStart = lazy(() => import('./containers/Home/Home'));
const LazySkills = lazy(() => import('./containers/Skills/Skills'));
const LazyHire = lazy(() => import('./containers/Hire/Hire'));

class App extends Component {

  state = {
    preload : false,
    preloadPointer: LazySkills.preload()
  }

  preloadContainers = () => {
    if(!this.state.preload){
      if(this.props.history.location.pathname !== '/Start'){
        LazyStart.preload();
      }
      LazySkills.preload();
      LazyHire.preload();
      this.setState({preload: true});
    }
  }
  
  render(){
    let pageToRender = (
      <TransitionGroup>
        <CSSTransition 
          key={this.props.location.pathname}
          classNames={pageTransition}
          timeout = {0}>
          <Switch>
            <Route path='/Start' render={ (props) => <Suspense fallback={<Spinner/>}><LazyStart /></Suspense>}/>
            <Route path='/Skills' render={ () => <Suspense fallback={<Spinner/>}><LazySkills preloadPointer={this.state.preloadPointer}/></Suspense>}/>
            <Route path='/Hire' render={ () => <Suspense fallback={<Spinner/>}><LazyHire/></Suspense>}/>
            <Redirect from='/' to='/Start'/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )

    return (
      <div className={classes.App}>
        <Navigation lang={'PL'} onMouseOver={this.preloadContainers}/>
        {pageToRender}
      </div>
    );
  }
}

export default withRouter(App);
