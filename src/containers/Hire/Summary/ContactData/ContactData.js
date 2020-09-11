import React, {useState} from 'react';
import classes from './ContactData.module.css';

const Contact = props => {

    const headerPL = useState('Odezwij się! :) ')
    const [headerENG] = useState('Feel free to contact me :)');
    const [listPL] = useState([
        {content:'Numer telefonu ',
        data: '+48 735 409 012'},
        {content: 'E-mail',
        data: 'tymoteusz.jagiello@interia.pl'},
        {content: 'Github account',
        data: 'https://github.com/Tymoteusz12'}])
     return (
        <div className={classes.Contact}>
            <h2>
                {headerPL}
            </h2>
            <ul>
                {listPL.map(detail => {
                    return (
                    <li key={detail.data}>
                        <p>{detail.content}</p>
                        <p className={classes.data}>{detail.data}</p>
                    </li>);
                })}
            </ul>
        </div>
    );
}

export default Contact;