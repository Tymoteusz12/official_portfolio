import React, { Component } from 'react';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
class Navigation extends Component{

    state = {
        nav_bars_pl: ['Zaczynamy!', 'Umiejętności',  'Kilka słów o mnie', 'Skontaktuj się!'],
        nav_bars_eng: ['Here we go!', 'My skills', 'Briefly about me', 'Call me!'],
        paths: ['/Start', '/Skills', '/About', '/Contact']
    }
    render(){
        let navID = 0;
        return(
            <div className={classes.list}>
                    {this.props.lang === 'PL' 
                    ? this.state.nav_bars_pl.map(path => {
                        console.log(navID);
                        return (
                            <NavLink 
                            key={path}
                            to={this.state.paths[navID++]}
                            className={classes.NavLink}
                            activeClassName={classes.active}>
                                { path }
                            </NavLink>
                        )
                    })
                    : this.state.nav_bars_eng.map(path => {
                        return (
                            <NavLink 
                            key={path}
                            to={this.state.paths[navID++]}
                            className={classes.NavLink}
                            activeClassName={classes.active}>
                                { path }
                            </NavLink>
                        )
                        })
                    }
            </div>
        );
    };
}

export default Navigation;