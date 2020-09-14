import React, { Component } from 'react';
import classes from './Navigation.module.css';
import {NavLink, withRouter} from 'react-router-dom';
class Navigation extends Component{

    state = {
        nav_bars_pl: ['Zaczynamy!', 'Umiejętności',  'Zatrudnij :)'],
        nav_bars_eng: ['Here we go!', 'My skills', 'Hire me :)'],
        paths: ['/Start', '/Skills', '/Hire']
    }


    render(){
        let navID = 0;
        return(
            <div className={classes.list} onMouseOver={this.props.onMouseOver}>
                    {this.props.lang === 'PL' 
                    ? this.state.nav_bars_pl.map(path => {
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

export default withRouter(Navigation);