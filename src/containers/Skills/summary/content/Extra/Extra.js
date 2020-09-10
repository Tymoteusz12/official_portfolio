import React, { useState } from 'react';
import classes from '../Frontend/Frontend.module.css';
import classesExtra from './Extra.module.css';
const Extra = props => {

    const [abilities, setAbilities] = useState([
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

    return(
        <div className={classesExtra.outside}>
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
    );

}

export  default Extra;