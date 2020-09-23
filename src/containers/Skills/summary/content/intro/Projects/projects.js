import React, { useEffect, useState } from 'react';
import classes from './projects.module.css';
import {CSSTransition} from 'react-transition-group';
import {textSmoothTransition} from '../../../../../../shared/transitionClasses';
import { Link } from 'react-scroll';
import {connect} from 'react-redux';
const Proj = props => {

    const [headerPL] = useState('Stworzyłem specjalną stronę dla moich projektów. Zachęcam do jej sprawdzenia, gdyż potwierdza moje umiejętności wymienione poniżej.');
    const [headerENG] = useState('I created special website, where I put my personal projects. You are welcomed there.')
    const [attentionPL] = useState('Mała notka - sprawdź również proszę projekty nie związane z rozwojem aplikacji webowych, gdyż zostały dodane by ukazać moje umiejętności programowania oraz mogą mnie wyróżniać na tle potencjalnych kandydatów.');
    const [attentionENG] =useState('Small note - take a glimpse also  on projects that are not related with web development, cause they may show my skills as a developer and they may mark me out among other candidates.') 
    const [labelPL] = useState('Sprawdź projekty');
    const [labelENG] = useState('Check projects');
    const [stayPL] = useState('Przejdź dalej');
    const [stayENG] = useState('Go forward');

    const [shouldBeVisible, setShouldBeVisible] = useState(false);

    function scrollHandler(){
        let elem = document.getElementById('ProjectComp');
        let domRect = elem.getBoundingClientRect();

        if(domRect.y < window.innerHeight / 2){
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
                <h3>
                    {props.language === 'PL'
                    ? headerPL
                    : headerENG}
                </h3>
                <h3 className={classes.attention}>
                        {props.language === 'PL'
                        ? attentionPL
                        : attentionENG}
                </h3>
                <div className={classes.buttonWrapper}>
                    <div className={classes.projectsButton}><a href={'https://tymoteusz12.github.io/Projects_web'} target='blank'>
                            <p>
                                {props.language === 'PL'
                                ? labelPL
                                : labelENG }
                            </p>
                        </a>
                    </div>
                    <Link 
                        className={classes.goForward}
                        to={'skills'} 
                        smooth={true} 
                        spy={true}
                        duration={600}>
                            <p>
                                {props.language === 'PL'
                                ? stayPL
                                : stayENG}
                            </p>
                    </Link>
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

export default connect(mapStateToProps)(Proj);