import React, { Component } from 'react';
import classes from '../../Skills/summary/summary.module.css';
import classesLocal from './Summary.module.css';
import Ambition from '../../../resources/img/ambition.jpg';
import Cooperation from '../../../resources/img/team_work.jpg';
import Growth from '../../../resources/img/grow.jpg';
import Investment from '../../../resources/img/investment.jpg';
import Knowledge from '../../../resources/img/knowledge.jpg';
import ContactData from './ContactData/ContactData.js';
class Summary extends Component{
    state = {
        hireReasonsPL: [
            {content: 'Zatem, jeśli szukasz Front-end Developera, gotowego podjąć się ambitnych zadań',
            image: Ambition}, 
            {content: 'Otwartego na współpracę z doświadczonym zespołem deweloperów', 
            image: Cooperation},
            {content: 'Unikającego stagnacji w rozwoju i zdobywaniu doświadczenia',
            image:Growth},
            {content: 'Stale wzbogacającego swoje portfolio, młodego i chcącego zmienić otaczającą rzeczywistość na lepszą',
            image: Investment},
            {content: 'Posiadającego wiedzę i umiejętności, potwierdzone przez 9 projektów stworzonych z własnej inicjatywy i 1 w ramach nauki stworzonego w trakcie kursu Reacta',
            image: Knowledge}],
        hireReasonsENG: [
            {content: 'Therefore, if you are looking for Front-end Developer, who is ready to take up ambitious tasks', 
            image: Ambition},
            {content: 'The person, who is open for cooperation with experienced developers',
            image: Cooperation},
            {content: 'The avoidant of stagnation in growth and experience gains',
            image: Growth},
            {content: 'Continously enriching his portfolio, young and with will of world change to better',
            image: Investment},
            {content: 'Owner of knowledge and skills, confirmed by 9 independent projects created from my initiative, and one created during React Course',
            image: Knowledge}],
      
        reasonsIMG: [Ambition, Cooperation, Growth, Investment, Knowledge]
    }

    render(){
        return(
            <div className={classes.Summary + ' ' + classesLocal.Summary}>
                <ul className={classesLocal.list}>
                    {this.state.hireReasonsENG.map(reason => {
                        return (
                        <li key={reason.content.slice(0, 12)}>
                            <p>{reason.content}</p>
                            <img src={reason.image} alt={reason.content}/>
                        </li>)
                    })}
                </ul>
                <ContactData/>
            </div>
        );
    }
}

export default Summary;