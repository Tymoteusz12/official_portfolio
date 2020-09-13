import React, { useEffect, useState } from 'react';
import classes from './projects.module.css';
import {CSSTransition} from 'react-transition-group';
import {textSmoothTransition} from '../../../shared/transitionClasses';

const Proj = props => {

    const [headerPL] = useState('Stworzyłem specjalną stronę dla moich projektów. Zachęcam do jej sprawdzenia, gdyż potwierdza moje umiejętności wymienione poniżej.');
    const [headerENG] = useState('I created special website, where I put my personal projects. You are welcomed there.')
    const [labelPL] = useState('Sprawdź projekty');
    const [labelENG] = useState('Check projects');

    const [shouldBeVisible, setShouldBeVisible] = useState(false);

    function scrollHandler(){
        let scrollValue = window.scrollY;
        let elem = document.getElementById('ProjectComp');
        let domRect = elem.getBoundingClientRect();

        if(scrollValue > domRect.y + window.innerHeight / 4){
            setShouldBeVisible(true);
        }
        else{
            setShouldBeVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        setShouldBeVisible(false);
    }, [])

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            setShouldBeVisible(false);
        }
    }, [])


    return(
        <CSSTransition 
            in = {shouldBeVisible}
            classNames = {textSmoothTransition}
            timeout = {0}>
            <div className={classes.Proj} id='ProjectComp'>
                <h3>{headerPL}</h3>
                <div className={classes.buttonWrapper}>
                    <div className={classes.projectsButton}><a href={'https://tymoteusz12.github.io/Projects_web'} target='blank'><p>{labelPL}</p></a></div>
                    <div className={classes.goForward}><p>Przejdz dalej</p></div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default Proj;