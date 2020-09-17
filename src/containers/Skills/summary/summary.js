import React, {useState} from 'react';
import classes from './summary.module.css';
import Content from './content/content';
import {moveImage} from '../../../shared/transitionClasses';
import {CSSTransition} from 'react-transition-group';
import Backdrop from '../../../components/Backdrop/Backdrop';
const Summary = props => {

    const [showImg, toggleShowImg] = useState(false);

    const toggleImg = () => {
        toggleShowImg(prevState => !prevState);
    }

    return(
        <div className={classes.Summary}>   
            <div className={classes.background}>
                <CSSTransition 
                    in={showImg}
                    classNames={moveImage}
                    timeout={0}>
                        <div className={classes.image} 
                            onClick={showImg ? null : toggleImg}>
                                {showImg
                                ? <p className={classes.close} 
                                    onClick = {toggleImg}>X</p>
                                : null}
                        </div> 
                </CSSTransition>
                <Backdrop show={showImg} click={toggleImg}></Backdrop>
            </div>
            <Content />
        </div>
    );
}

export default Summary;