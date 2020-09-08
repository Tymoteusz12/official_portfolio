import React, { useState } from 'react';
import classes from './Frontend.module.css';

const Frontend = props => {

    const [abilities, setAbilities] = useState([
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

    const [headerPL] = useState('Tworząc strony internetowe korzystam z:');
    const [headerENG] = useState('For web development I use: ');

    return(
        <div className={classes.wrapper}>
            <h2>{headerPL}</h2>
            <div className={classes.abilities}>
                <ul>
                    {abilities.map( ability =>(
                        <li key={ability}>
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

export  default Frontend;