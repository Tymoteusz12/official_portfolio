import React, {useState, useEffect} from 'react';
import classes from './ContactData.module.css';
import {CSSTransition} from 'react-transition-group';
import {textSmoothTransition} from '../../../../shared/transitionClasses';
const Contact = props => {

    const [headerPL] = useState('Odezwij się! :) ')
    const [headerENG] = useState('Feel free to contact me :)');
    const [listPL] = useState([
        {content:'Numer telefonu ',
        data: '+48 735 409 012'},
        {content: 'E-mail',
        data: 'tymoteusz.jagiello@interia.pl'},
        {content: 'Konto Github',
        data: 'https://github.com/Tymoteusz12'}]);

    const [listENG] = useState([
        {content:'Phone number ',
        data: '+48 735 409 012'},
        {content: 'E-mail',
        data: 'tymoteusz.jagiello@interia.pl'},
        {content: 'Github account',
        data: 'https://github.com/Tymoteusz12'}])

    const [shouldBeVisible, setShouldBeVisible] = useState(false);

    function scrollHandler(){
        let elem = document.getElementById('hire');
        let domRect = elem.getBoundingClientRect();

        if(domRect.y < window.innerHeight/6){
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

     return (
         <CSSTransition 
            in={shouldBeVisible}
            classNames={textSmoothTransition}
            timeout={0}>
            <div className={classes.Contact} id='hire'>
                <h2>
                    {props.language === 'PL'
                    ? headerPL
                    : headerENG}
                </h2>
                <ul>
                    {props.language === 'PL' 
                        ? listPL.map(detail => {
                            return (
                            <li key={detail.data}>
                                <p>{detail.content}</p>
                                <p className={classes.data}>{detail.data}</p>
                            </li>);
                        })
                        : listENG.map(detail => {
                            return (
                            <li key={detail.data}>
                                <p>{detail.content}</p>
                                <p className={classes.data}>{detail.data}</p>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </CSSTransition>
    );
}

const mapStateToProps = state => {
    return {
        language : state.UIReducer.language,
        theme : state.UIReducer.theme
    }
}

export default Contact;