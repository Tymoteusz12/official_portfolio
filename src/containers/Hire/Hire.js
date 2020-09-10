import React, { Component } from 'react';
import classes from './Hire.module.css'
import Summary from './Summary/Summary';

class Hire extends Component{
    state = {

    }

    render(){
        return(
            <div className={classes.Hire}>
                <div className={classes.overlay}></div>
                <Summary/>
            </div>
        );
    }
}

export default Hire;