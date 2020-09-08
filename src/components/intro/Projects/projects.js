import React, { useState } from 'react';
import classes from './projects.module.css';

const Proj = props => {

    const [headerPL] = useState('Stworzyłem specjalną stronę dla moich projektów. Zachęcam do jej sprawdzenia, gdyż potwierdza moje umiejętności wymienione poniżej.');
    const [headerENG] = useState('I created special website, where I put my personal projects. You are welcomed there.')
    const [labelPL] = useState('Sprawdź projekty');
    const [labelENG] = useState('Check projects');
    return(
        <div className={classes.Proj}>
            <h3>{headerPL}</h3>
            <div className={classes.buttonWrapper}>
                <div className={classes.projectsButton}><a href={'https://tymoteusz12.github.io/Projects_web'} target='blank'><p>{labelPL}</p></a></div>
                <div className={classes.goForward}><p>Przejdz dalej</p></div>
            </div>
        </div>
    );
}

export default Proj;