import React, { Component } from 'react';
import classes from './GoTo.module.css';

class GoTo extends Component{


    render(){
        return(
            <div>
                <div className={classes.right}><i className="fas fa-chevron-right"></i></div>
                <div className={classes.left}><i className="fas fa-chevron-right"></i></div>
            </div>
        );
    }
}

export default GoTo;