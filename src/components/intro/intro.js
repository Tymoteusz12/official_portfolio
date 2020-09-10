import React, { useState } from 'react';
import classes from './intro.module.css';
import Projects from './Projects/projects';

const Intro = props => {

    const [titlesPL] = useState([
        'Pasjonat nowoczesnych technologii',
        'Front-end developer to be',
        'Miłośnik astronomii i fizyki',
        'Programista'
    ]);

    const [titlesENG] = useState([
        'Pasjonat nowoczesnych technologii',
        'Front-end developer to be',
        'Miłośnik astronomii i fizyki',
        'Programmer'
    ])

    const [shortAboutPL] = useState(
        'Programowanie pochłonęło mnie z początkiem 2019 roku. Od tamtego okresu poznałem 2 języki programowania i 1 język skryptowy, technologie do tworzenia stron internetowych oraz wykorzystywałem OpenGL wraz z GLSL programując w języku C++ grafikę 3D. W pisaniu kodu bardzo dobrze się odnajduję. Poszukuję okazji do zdobycia pierwszego doświadczenia zawodowego, gdyż takowego nie posiadam.')
       
    const [shortAboutENG] = useState(
        'My programming journey started in the beginning of 2019. Since that time I learned 3 programming languages, web development technologies and modern OpenGL with shaders language. When I am programming I am like a kid in a candy shop. I start to release my potential. I am looking for oportunity to gain first job experience.'
    )    
    return(
        <div className={classes.wrapper}>
            <h2>Tymoteusz Jagiełło</h2>
                <ul>
                    {titlesPL.map(title => {
                        return (
                            <li key={title}>{title}</li>
                        )
                    })}
                </ul>
            <article className={classes.intro}>
                <p className={classes.shortAbout}>
                    {shortAboutPL}
                </p>
            </article>
            <Projects/>
        </div>
    );
};

export default Intro;