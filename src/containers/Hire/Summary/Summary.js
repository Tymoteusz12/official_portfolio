import React, { Component } from 'react';
import classes from '../../Skills/summary/summary.module.css';
import classesLocal from './Summary.module.css';
import Ambition from '../../../resources/img/ambition.jpg';
import Cooperation from '../../../resources/img/team_work.jpg';
import Growth from '../../../resources/img/grow.jpg';
import Investment from '../../../resources/img/investment.jpg';
import Knowledge from '../../../resources/img/knowledge.jpg';

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
        headerOnePL: 'Jeśli moje portfolio w jakiś sposób cię zaintrygowało, to jest mi na prawdę miło i mam nadzieję, że się poznamy osobiście! :)',
        headerOneENG: 'If portfolio in some way intrigued you, I am pleased and I hope, we are going to meet soon! :)',
        headerTwoPL: 'Jestem odpowiednim kandydatem w rekrutacji na zaaplikowane przeze mnie stanowisko, wówczas gdy: ',
        headerTwoEng: 'I am suitable candidate for applied position, when: ',
        hireMatchesPL: ['Będę wykorzystywał technologię React i Redux w codziennej pracy',
        'Stale będę nadzorował kod pisany w JavaScript, HTML bądź CSS/Sass',
        'Projekty będą wymagały napisania wydajnego kodu asynchronicznego od czasu do czasu',
        'Będę poszerzał swoją wiedzę o UI i UX poprzez kontakt z bardziej doświadczonymi, implementował responsywne strony oraz tworzył Single Page Applications',
        'Będę mógł poszerzać swoją wiedzę o Backend - Node.js/Django/Python/PHP/Java/SQL',
        'Będę miał możliwość otrzymania oferty opartej o długotrwałą współpracę'],
        hireMatchesENG: ['I will have opportunity to use React and Redux in daily work',
        'Constantly will inspect code, written in JavaScript, HTML or CSS/Sass',
        'Projects will require to write asynchronous code from time to time',
        'There will be opportunity to extend knowledge/skills about UI and UX through contact with more experienced, also implement responsive pages and Single Page Applications',
        'I will have chance to upgrade my knowledge about Backend - Node.js/Django/Python/PHP/Java/SQL',
        'There will be occasion of receiving offer based on long partnership'],
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
                <h2>{this.state.headerTwoPL}</h2>
                <ul className={classesLocal.secondList}>
                {this.state.hireMatchesENG.map(reason => {
                        return (<li key={reason}>{reason}</li>)
                    })}
                </ul>
                <h2>{this.state.headerOnePL}</h2>
            </div>
        );
    }
}

export default Summary;