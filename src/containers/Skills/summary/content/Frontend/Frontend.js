import React, { useState, useEffect } from 'react';
import classes from './Frontend.module.css';
import {CSSTransition} from 'react-transition-group';
import { textSmoothTransition } from '../../../../../shared/transitionClasses';
import {handleScroll} from '../../../../../shared/animationsToggle/scrollHandler';
import {connect} from 'react-redux';

const Frontend = props => {

    const [abilities] = useState([
        {name: 'JavaScript',
        image: 'fab fa-js'}, 
        {name: 'React',
        image: 'fab fa-react'},
        {name: 'Redux',
        image: 'fas fa-tachometer-alt'},
        {name: 'Sass',
        image: 'fab fa-sass'},
        {name: 'AJAX',
        image: 'fas fa-sync'},
        {name: 'git',
        image:'fas fa-code-branch'},
        {name: 'HTML5',
        image: 'fab fa-html5'},
        {name:'CSS3',
        image: 'fab fa-css3'}]);

    const [headerPL] = useState('Tworząc strony internetowe korzystam z ');
    const [headerENG] = useState('For web development I use ');

    const [shouldBeVisible, setShouldBeVisible] = useState(false);

    function scrollHandler(){
        setShouldBeVisible(handleScroll('skills', 8));
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

    const skillsToRender = abilities.map( ability =>(
            <li key={ability.name}>
            {ability.image !== '' 
            ? <i className={ability.image}></i>
            : null}
            <p><em>{ability.name}</em></p>
            </li>
    ))

    return(
        <CSSTransition 
            in={shouldBeVisible}
            classNames={textSmoothTransition}
            timeout={0}>
            <div className={classes.wrapper} id={'skills'}>
                <h2>
                    {props.language === 'PL'
                    ? headerPL
                    : headerENG}
                </h2>
                <div className={classes.abilities}>
                        <ul>
                            {skillsToRender}
                        </ul>
                </div>
            </div>
        </CSSTransition>
    );
}

const mapStateToProps = state => {
    return {
        language : state.language,
        theme : state.theme
    }
}

export default connect(mapStateToProps)(Frontend);