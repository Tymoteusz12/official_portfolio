import React, { Component } from 'react';
import classes from './Skills.module.css';

class Skills extends Component {

    render(){
        return(
            <div className={classes.Skills}>
                <div className={classes.overlay}></div>
                <div className={classes.Summary}>   
                    <div className={classes.background}></div>
                    <div className={classes.image}></div>
                    <div className={classes.content}>
                        <article className={classes.intro}>
                            <h2>Tymoteusz Jagiełło</h2>
                            <ul>
                                <li>Pasjonat nowoczesnych technologii</li>
                                <li>Pasjonat nowoczesnych technologii</li>
                                <li>Pasjonat nowoczesnych technologii</li>
                            </ul>
                            <p className={classes.shortAbout}>
                            Programowanie pochłonęło mnie z początkiem 2019 roku. Od tamtego okresu
                            poznałem 3 języki programowania, technologie do tworzenia stron internetowych oraz
                            wykorzystywałem OpenGL wraz z GLSL programując w języku C++ grafikę 3D. W pisaniu
                            kodu bardzo dobrze się odnajduję. Mam bardzo ścisły umysł, jednocześnie nie ograniczam się
                            jedynie do świata komputerowego.
                            </p>
                        </article>
                        <div className={classes.abilities}>
                            <ul>
                                <li>cpp</li>
                                <li>python</li>
                                <li>cpp</li>
                                <li>python</li>
                                <li>cpp</li>
                                <li>python</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    };
}

export default Skills;