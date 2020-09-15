import React, { Component } from 'react';
import classes from '../../Skills/summary/summary.module.css';
import classesLocal from './Summary.module.css';
import Ambition from '../../../resources/img/ambition.jpg';
import Cooperation from '../../../resources/img/team_work.jpg';
import Growth from '../../../resources/img/grow.jpg';
import Investment from '../../../resources/img/investment.jpg';
import Knowledge from '../../../resources/img/knowledge.jpg';
import ContactData from './ContactData/ContactData.js';
import {CSSTransition} from 'react-transition-group';
import {imgSmoothTransition} from '../../../shared/transitionClasses';
import {Link} from 'react-scroll';
import {connect} from 'react-redux';
class Summary extends Component{
    state = {
        hireReasonsPL: [
            {content: 'Zatem, jeśli szukasz Front-end Developera, gotowego podjąć się ambitnych zadań',
            image: Ambition,
            id: 'za',
            visible: false}, 
            {content: 'Otwartego na współpracę z doświadczonym zespołem deweloperów', 
            image: Cooperation,
            id: 'ot',
            visible: false},
            {content: 'Unikającego stagnacji w rozwoju i zdobywaniu doświadczenia',
            image:Growth,
            id: 'un',
            visible: false},
            {content: 'Stale wzbogacającego swoje portfolio, młodego i chcącego zmienić otaczającą rzeczywistość na lepszą',
            image: Investment,
            id: 'st',
            visible: false},
            {content: 'Posiadającego wiedzę i umiejętności, potwierdzone przez 9 projektów stworzonych z własnej inicjatywy i 1-go w ramach nauki stworzonego w trakcie kursu Reacta',
            image: Knowledge,
            id: 'po',
            visible: false}],
        hireReasonsENG: [
            {content: 'Therefore, if you are looking for Front-end Developer, who is ready to take up ambitious tasks', 
            image: Ambition,
            id: 'za',
            visible: false},
            {content: 'The person, who is open for cooperation with experienced developers',
            image: Cooperation,
            id: 'ot',
            visible: false},
            {content: 'The avoidant of stagnation in growth and experience gains',
            image: Growth,
            id: 'un',
            visible: false},
            {content: 'Continously enriching his portfolio, young and with will of world change to better',
            image: Investment,
            id: 'st',
            visible: false},
            {content: 'Owner of knowledge and skills, confirmed by 9 independent projects created from my initiative, and one created during React Course',
            image: Knowledge,
            id: 'po',
            visible: false}],
      
        reasonsIMG: [Ambition, Cooperation, Growth, Investment, Knowledge],
        identificators: ['za', 'ot', 'un', 'st', 'po'],
        goToPL: 'Przejdź do danych kontaktowych',
        goToENG: 'Go to contact data'
    }

    scrollHandler = () => {
        for(let i = 0; i < this.state.identificators.length; i++){
            let elem = document.getElementById(this.state.identificators[i]);
            let domRect = elem.getBoundingClientRect();
            let hireReasonsCopy = 0;
            if(this.props.language === 'PL'){
                hireReasonsCopy = {...this.state.hireReasonsPL};
            }
            else{
                hireReasonsCopy = {...this.state.hireReasonsENG}
            }

            if(domRect.y < window.innerHeight/2){
                hireReasonsCopy[i].visible = true;
                this.setState({
                    ...this.state.hireReasonsPL, 
                    hireReasonsCopy})
            }
            else{
                hireReasonsCopy[i].visible = false;
                this.setState({
                    ...this.state.hireReasonsPL, 
                    hireReasonsCopy})
            }
        }
    }

    componentDidMount(){
        let hireReasonsCopy = 0;
        if(this.props.language === 'PL'){
            hireReasonsCopy = {...this.state.hireReasonsPL};
        }
        else{
            hireReasonsCopy = {...this.state.hireReasonsENG}
        }
        hireReasonsCopy[0].visible = true;

        window.addEventListener('scroll', this.scrollHandler);
        this.setState({shouldBeVisible: false})
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler);
        this.setState({shouldBeVisible: false})
    }

    render(){
        let reasonsToRender;
        if(this.props.language === 'PL'){
            reasonsToRender = this.state.hireReasonsPL.map(reason => {
                return (<CSSTransition 
                    key={reason.id}
                    in={reason.visible}
                    classNames = {imgSmoothTransition}
                    timeout = {0}>
                    <li id={reason.id}>
                        <p>{reason.content}</p>
                        <img src={reason.image} alt={reason.content}/>
                    </li>
                </CSSTransition>)
                }
            )
        }
        else{
            reasonsToRender = this.state.hireReasonsENG.map(reason => (
                <CSSTransition 
                    key={reason.id}
                    in={reason.visible}
                    classNames = {imgSmoothTransition}
                    timeout = {0}>
                    <li id={reason.id}>
                        <p>{reason.content}</p>
                        <img src={reason.image} alt={reason.content}/>
                    </li>
                </CSSTransition>
                )
            )
        }
        return(
            <div className={classes.Summary + ' ' + classesLocal.Summary}>
                <Link 
                    className={classesLocal.goToContact}
                    to={'hire'} 
                    smooth={true} 
                    spy={true}
                    duration={600}>
                        <p>
                            {this.props.language === 'PL' 
                            ? this.state.goToPL
                            : this.state.goToENG}</p>
                        <i className="fas fa-mouse-pointer"></i>
                </Link>
                <ul className={classesLocal.list}>
                    {reasonsToRender}
                </ul>
                <ContactData/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language : state.language,
        theme : state.theme
    }
}

export default connect(mapStateToProps)(Summary);