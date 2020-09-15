import React, { useEffect, useState } from 'react';
import {CSSTransition} from 'react-transition-group';
import classes from './toggle.module.css';
import {buttonChanger} from '../../../shared/transitionClasses';

const Toggle = props => {

    const [active, toggleButton] = useState(false);

    function onClickHandler(){
        toggleButton((prevState) => !prevState);
    }

    useEffect( () =>{
        toggleButton(true);
    }, [])

    return(
        <div className={classes.switch}>
            <CSSTransition 
                in={active}
                classNames={buttonChanger}
                timeout={{enter: 0, exit: 0}}>
                    <div className={classes.toggler} onClick={onClickHandler}>
                        <i className={classes.sun + ' fas fa-sun'}></i>
                        <i className={classes.moon + ' far fa-moon'}></i>
                    </div>
            </CSSTransition>
        </div>
    );
};


export default Toggle;