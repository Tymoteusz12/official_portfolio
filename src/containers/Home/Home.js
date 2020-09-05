import React, { Component } from 'react';
import classes from './Home.module.css';
import GoTo from '../GoTo/GoTo';

class Home extends Component {

    render(){
        return(
            <div className={classes.Home}>
                <GoTo />
            </div>
            
        );
    };
}

export default Home;