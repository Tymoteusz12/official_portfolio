import React, { Component } from 'react';
import classes from './Skills.module.css';
import Summary from './summary/summary';
import {withRouter} from 'react-router-dom'
class Skills extends Component {
    
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className={classes.Skills}>
                <div className={classes.overlay}></div>
                <Summary />
            </div>
        );
    };
}

export default withRouter(Skills);