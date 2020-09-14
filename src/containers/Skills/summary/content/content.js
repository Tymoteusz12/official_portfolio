import React from 'react';
import Intro from './intro/intro';
import Frontend from './Frontend/Frontend';
import Extra from './Extra/Extra';
import Hobbies from './Hobbies/hobbies';

const Content = props => {

    return(
        <div>
            <Intro />   
            <Frontend/>
            <Extra />
            <Hobbies/>
        </div>
    );
}

export default Content;