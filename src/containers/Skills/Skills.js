import React, { Component } from 'react';
import classes from './Skills.module.css';
import Summary from './summary/summary';
class Skills extends Component {

    render(){
        return(
            <div className={classes.Skills}>
                <div className={classes.overlay}></div>
                <Summary />
            </div>
        );
    };
}

export default Skills;