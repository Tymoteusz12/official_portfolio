import React, { useState } from 'react';
import classes from './intro.module.css';
const Intro = props => {

    const [titlesPL] = useState([
        'Pasjonat nowoczesnych technologii',
        'Front-end developer to be',
        'Miłośnik astronomii i fizyki'
    ]);

    const [titlesENG] = useState([
        'Pasjonat nowoczesnych technologii',
        'Front-end developer to be',
        'Miłośnik astronomii i fizyki'
    ])

    const [shortAboutPL] = useState(
        'Programowanie pochłonęło mnie z początkiem 2019 roku. Od tamtego okresu poznałem 3 języki programowania, technologie do tworzenia stron internetowych oraz wykorzystywałem OpenGL wraz z GLSL programując w języku C++ grafikę 3D. W pisaniu kodu bardzo dobrze się odnajduję. Mam bardzo ścisły umysł, jednocześnie nie ograniczam się jedynie do świata komputerowego.')
       
    const [shortAboutENG] = useState(
        'My programming journey started in the beginning of 2019. Since that time I learned 3 programming languages, web development technologies and modern OpenGL with shaders language. When I am programming I am like a kid in a candy shop. I start to release my potential.'
    )    
    return(
        <div className={classes.wrapper}>
            <h2>Tymoteusz Jagiełło</h2>
                <ul>
                    {titlesPL.map(title => {
                        return (
                            <li>{title}</li>
                        )
                    })}
                </ul>
            <article className={classes.intro}>
                <p className={classes.shortAbout}>
                    {shortAboutPL}
                </p>
            </article>
        </div>
    );
};

export default Intro;