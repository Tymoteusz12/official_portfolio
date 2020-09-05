import React, { Component } from 'react';
import classes from './Home.module.css';
import GoTo from '../GoTo/GoTo';

class Home extends Component {

    render(){
        return(
            <div className={classes.Home}>
                <h2>Front-end/React developer</h2>
                <div className={classes.paragraph}>
                    <p>Cześć! Witaj na mojej stronie :). Mam nadzieję, że znajdziesz
                    potrzebne dla ciebie informacje. Aktualnie poszukuję 
                    pracy jako junior Front-end / React developer. </p>
                    </div>
                <div className={classes.general}>
                    <div className={classes.select}>
                        <p>Dla celów rekrutacyjnych stworzyłem
                            stronę internetową, poświęconą moim
                            własnym projektom.
                        </p>
                        <div className={classes.projectsButton}><p>Sprawdź projekty</p></div>
                    </div>
                    <div className={classes.select}>
                        <p>Jeśli chcesz pozostać na stronie
                            i poznać moje umiejętności, kliknij w przycisk.
                        </p>
                        <div className={classes.stayButton}><p>Umiejętności</p></div>
                    </div>
                </div>
            </div>
            
        );
    };
}

export default Home;