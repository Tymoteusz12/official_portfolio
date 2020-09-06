import React, { Component } from 'react';
import classes from './Home.module.css';

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
                        <p>Odwiedź stronę z moimi własnymi projektami
                        </p>
                        <div className={classes.projectsButton}><p>Sprawdź projekty</p></div>
                    </div>
                    <div className={classes.select}>
                        <p>Dowiedz się, dlaczego warto mnie zatrudnić
                        </p>
                        <div className={classes.stayButton}><p>Umiejętności</p></div>
                    </div>
                </div>
            </div>
            
        );
    };
}

export default Home;