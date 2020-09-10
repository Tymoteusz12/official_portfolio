import React, { Component } from 'react';
import classes from './hobbies.module.css';

class Hobbies extends Component {

    state = {
        headerPL: 'Nie licząc tworzenia stron internetowych, moje zainteresowania obejmują również:',
        headerENG: 'Except of web development, my interests include: ',
        interestsPL: [
            {name: 'Astronomia',
            image: 'fas fa-star'},
            {name: 'Fizyka',
            image: 'fas fa-atom'},
            {name: 'Matematyka',
            image: 'fas fa-infinity'},
            {name: 'Cyberbezpieczeństwo',
            image: 'fas fa-lock'}, 
            {name: 'Sztuczna inteligencja',
            image: 'fas fa-brain'}, 
            {name: 'Tworzenie gier i symulacji komputerowych',
            image: 'fas fa-dice-d6'}, 
            {name: 'Trójbój siłowy',
            image: 'fas fa-dumbbell'},
            {name: 'Lekkoatletyka',
            image: 'fas fa-running'},
             
        ],
        interestsENG: [
            {name: 'Astronomy',
            image: 'fas fa-star'},
            {name: 'Physics',
            image: 'fas fa-atom'},
            {name: 'Math',
            image: 'fas fa-infinity'},
            {name: 'Cybersecurity',
            image: 'fas fa-lock'}, 
            {name: 'Artificial inteligence',
            image: 'fas fa-brain'}, 
            {name: 'Games and 3D simulations development',
            image: 'fas fa-dice-d6'}, 
            {name: 'Weight lifting',
            image: 'fas fa-dumbbell'},
            {name: 'Track and field',
            image: 'fas fa-running'},
        ]
    }
    render(){
        return (
            <div className={classes.hobbies}>
                <h2>{this.state.headerPL} 
                </h2>
                <ul>
                    {this.state.interestsPL.map(interest =>{
                        return (<li key={interest.name}>
                                    <i className={interest.image}></i>
                                    <p><em>{interest.name}</em></p>
                                </li>)
                    })}
                </ul>
            </div>
        );
    };

}

export default Hobbies;