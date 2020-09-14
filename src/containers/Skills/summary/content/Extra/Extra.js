import React, { useState, useEffect } from 'react';
import classes from '../Frontend/Frontend.module.css';
import classesExtra from './Extra.module.css';
import { textSmoothTransition } from '../../../../../shared/transitionClasses';
import {CSSTransition} from 'react-transition-group';
const Extra = props => {

    const [abilities] = useState([
        {name: 'Software architecture',
        image: 'fas fa-recycle'},
        {name: 'DOM/jQuery',
        image: 'fas fa-tasks'},
        {name: 'RWD',
        image: 'fas fa-wrench'},
        {name: 'SPA',
        image: 'fas fa-history'},
        {name: 'C/C++',
        image: 'fab fa-cuttlefish'},
        {name: 'OpenGL',
        image: 'fas fa-cube'},
        {name: 'GLSL',
        image: 'fas fa-shapes'},
        {name: 'Python',
        image: 'fab fa-python'}]);

    const [headerPL] = useState('Posiadam również wiedzę z pokrewnych: ');
    const [headerENG] = useState('Also my skills include: ');

    const [shouldBeVisible, setShouldBeVisible] = useState(false);

    function scrollHandler(){
        let elem = document.getElementById('extra');
        let domRect = elem.getBoundingClientRect();

        if(domRect.y < window.innerHeight/8){
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
            in={shouldBeVisible}
            classNames={textSmoothTransition}
            timeout={0}>
            <div className={classesExtra.outside} id='extra'>
                <h2>{headerPL}</h2>
                <div className={classes.abilities}>
                    <ul>
                        {abilities.map( ability =>(
                            <li key={ability.name}>
                                {ability.image !== '' 
                                ? <i className={ability.image}></i>
                                : null}
                                <p><em>{ability.name}</em></p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </CSSTransition>
    );

}

export  default Extra;