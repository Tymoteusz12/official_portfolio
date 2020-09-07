import React, { useState } from 'react';
import classes from '../Frontend/Frontend.module.css';

const Extra = props => {

    const [abilities, setAbilities] = useState([
        {name: 'C/C++',
        image: ''},
        {name: 'OpenGL',
        image: 'fas fa-cube'},
        {name: 'GLSL',
        image: 'fas fa-shapes'},
        {name: 'Python',
        image: 'fab fa-python'}]);

    const [headerPL] = useState('Posiadam również wiedzę z pokrewnych: ');
    const [headerENG] = useState('Also my skills include: ');

    return(
        <div style={{padding: '100px 0 150px 0',
                    boxShadow: '0px 24px 1px -24px black'}}>
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

export  default Extra;