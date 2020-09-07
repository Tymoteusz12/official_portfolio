import React from 'react';
import classes from './summary.module.css';
import Content from './content/content';
import Hobbies from './Hobbies/hobbies';
const Summary = props => {

    return(
        <div className={classes.Summary}>   
            <div className={classes.background}>
                <div className={classes.image}></div> 
            </div>
            <Content />
            <Hobbies/>
        </div>
    );
}

export default Summary;