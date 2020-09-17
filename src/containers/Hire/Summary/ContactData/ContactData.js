import React, {useState, useEffect} from 'react';
import classes from './ContactData.module.css';
import {CSSTransition} from 'react-transition-group';
import {textSmoothTransition} from '../../../../shared/transitionClasses';
import {connect} from 'react-redux';
const Contact = props => {

    const [headerPL] = useState('Odezwij się! :) ')
    const [headerENG] = useState('Feel free to contact me :)');
    const [listPL] = useState([
        {content:'Numer telefonu ',
        data: '+48 735 409 012'},
        {content: 'E-mail',
        data: 'tymoteusz.jagiello@interia.pl'},
        {content: 'Konto Github',
        data: 'https://github.com/Tymoteusz12'},
        {content: 'Linkedin',
        data: 'https://linkedin.com/in/tymoteusz-jagiełło-1300601b6'},
        {content: 'Moje projekty',
        data: 'https://tymoteusz12.github.io/Projects_web'}
    ]);

    const [listENG] = useState([
        {content:'Phone number ',
        data: '+48 735 409 012'},
        {content: 'E-mail',
        data: 'tymoteusz.jagiello@interia.pl'},
        {content: 'Github account',
        data: 'https://github.com/Tymoteusz12'},
        {content: 'Linkedin',
        
        data: 'linkedin.com/in/tymoteusz-jagiełło-1300601b6'},
        {content: 'My projects',
        data: 'https://tymoteusz12.github.io/Projects_web'}])

    const [shouldBeVisible, setShouldBeVisible] = useState(false);

    function scrollHandler(){
        let elem = document.getElementById('hire');
        let domRect = elem.getBoundingClientRect();

        if(domRect.y < window.innerHeight/4){
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
                            console.log(detail.data.slice(0, 4));
                            return (
                                <li key={detail.data}>
                                    <p>{detail.content}</p>
                                {detail.data.slice(0, 5) === 'https' 
                                ?  <a href={detail.data} target='blank' className={classes.data}>{detail.data}</a>
                                :  <p className={classes.data}>{detail.data}</p>}  
                            </li>);
                        })
                        : listPL.map(detail => {
                            console.log(detail.data.slice(0, 4));
                            return (
                                <li key={detail.data}>
                                    <p>{detail.content}</p>
                                {detail.data.slice(0, 5) === 'https' 
                                ?  <a href={detail.data} target='blank' className={classes.data}>{detail.data}</a>
                                :  <p className={classes.data}>{detail.data}</p>}  
                            </li>);
                        })
                    }
                </ul>
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

export default connect(mapStateToProps)(Contact);