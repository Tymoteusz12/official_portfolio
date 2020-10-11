import React, { Component } from 'react';
import classes from './hobbies.module.css';
import {textSmoothTransition} from '../../../../../shared/transitionClasses';
import {CSSTransition} from 'react-transition-group';
import {handleScroll} from '../../../../../shared/animationsToggle/scrollHandler';
import {connect} from 'react-redux';
class Hobbies extends Component {

    state = {
        headerPL: 'Nie licząc tworzenia stron internetowych, moje zainteresowania obejmują również ',
        headerENG: 'Except of web development I am interested in ',
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
        let toggleVisibility = handleScroll('hobbies', 2);
        this.setState({shouldBeVisible: toggleVisibility})
    }

    render(){
        let hobbiesToRender = [];
        if(this.props.language === 'PL'){
            hobbiesToRender = this.state.interestsPL.map(interest =>{
                return  (<li key={interest.name}>
                            <div>
                                <i className={interest.image}></i>
                            </div>
                            <div>
                                <p><em>{interest.name}</em></p>
                            </div>
                        </li>)
            })
        }
        else{
            hobbiesToRender = this.state.interestsENG.map(interest =>{
                return  (<li key={interest.name}>
                            <div>
                                <i className={interest.image}></i>
                            </div>
                            <div>
                                <p><em>{interest.name}</em></p>
                            </div>
                        </li>)
        })
    }
        return (
            <CSSTransition 
                in={this.state.shouldBeVisible}
                classNames={textSmoothTransition}
                timeout={0}>
                <div className={classes.hobbies} id='hobbies'>
                    <h2>
                        {this.props.language === 'PL'
                        ? this.state.headerPL
                        : this.state.headerENG} 
                    </h2>
                    <ul>
                        {hobbiesToRender}
                    </ul>
                </div>
            </CSSTransition>
        );
    };

}

const mapStateToProps = state => {
    return {
        language : state.language,
        theme : state.theme
    }
}

export default connect(mapStateToProps)(Hobbies);