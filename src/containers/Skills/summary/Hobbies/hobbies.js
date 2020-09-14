import React, { Component } from 'react';
import classes from './hobbies.module.css';
import {textSmoothTransition} from '../../../../shared/transitionClasses';
import {CSSTransition} from 'react-transition-group';
class Hobbies extends Component {

    state = {
        headerPL: 'Nie licząc tworzenia stron internetowych, moje zainteresowania obejmują również:',
        headerENG: 'Except of web development, my interests include: ',
        interestsPL: [
            {name: 'Astronomia i astrofizyka',
            image: 'fas fa-star'},
            {name: 'Fizyka cząstek elementarnych',
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
            {name: 'Astronomy and astrophysics',
            image: 'fas fa-star'},
            {name: 'Nuclear and particle physics',
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
        ],
        shouldBeVisible : false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler);
        this.setState({shouldBeVisible: false});
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler);
        this.setState({shouldBeVisible: false});
    }

    scrollHandler = () => {
        let elem = document.getElementById('hobbies');
        let domRect = elem.getBoundingClientRect();

        if(domRect.y < window.innerHeight/12){
            this.setState({shouldBeVisible: true});
        }
        else{
            this.setState({shouldBeVisible: false});
        }
    }

    render(){
        let hobbiesToRender = this.state.interestsPL.map(interest =>{
            return (<li key={interest.name}>
                        <i className={interest.image}></i>
                        <p><em>{interest.name}</em></p>
                    </li>)
        });
        return (
            <CSSTransition 
                in={this.state.shouldBeVisible}
                classNames={textSmoothTransition}
                timeout={0}>
                <div className={classes.hobbies} id='hobbies'>
                    <h2>{this.state.headerPL} 
                    </h2>
                    <ul>
                        {hobbiesToRender}
                    </ul>
                </div>
            </CSSTransition>
        );
    };

}

export default Hobbies;