import React from 'react';
import classes from './content.module.css';
import Intro from '../../../../components/intro/intro';
import Frontend from './Frontend/Frontend';
import Extra from './Extra/Extra';
 const Content = props => {

    return(
        <div className={classes.content}>
            <Intro />   
            <Frontend/>
            <Extra />
        </div>
    );
}

export default Content;