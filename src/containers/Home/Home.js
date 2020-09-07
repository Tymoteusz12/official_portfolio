import React, { Component } from 'react';
import classes from './Home.module.css';

class Home extends Component {

    state = {
        meetingPL: 'Cześć! Witaj na mojej stronie :). Mam nadzieję, że znajdziesz potrzebne dla ciebie informacje. Aktualnie poszukuję pracy jako junior Front-end / React developer.',
        meetingENG: 'Hey! Welcome on my site. I hope you are going to find informations necessary for u. Currently I am looking for junior Front-end / React developer position.',
        projectsPL: 'Odwiedź stronę z moimi własnymi projektami',
        projectsENG: 'Feel free to visit my page with my own projects.',
        skillsPL: 'Dowiedz się, dlaczego warto mnie zatrudnić',
        skillENG: 'find outwhy I am worth hiring',
        projLabelPL: 'Sprawdź projekty',
        projLabelENG: 'Check projects',
        skillsLabelPL: 'Umiejętności',
        skillsLabelENG: 'Abilities',

    }

    render(){
        return(
            <div className={classes.Home}>
                <h2>Front-end/React developer</h2>
                <div className={classes.paragraph}>
                    <p>{this.state.meetingPL}</p>
                    </div>
                <div className={classes.general}>
                    <div className={classes.select}>
                        <p>{this.state.projectsPL}
                        </p>
                        <div className={classes.projectsButton}><p>{this.state.projLabelPL}</p></div>
                    </div>
                    <div className={classes.select}>
                        <p>{this.state.skillsPL}
                        </p>
                        <div className={classes.stayButton}><p>{this.state.skillsLabelPL}</p></div>
                    </div>
                </div>
            </div>
            
        );
    };
}

export default Home;