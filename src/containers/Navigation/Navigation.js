import React, { Component } from 'react';
import classes from './Navigation.module.css';
import {NavLink, withRouter} from 'react-router-dom';
import Settings from '../Settings/settings';
import {connect} from 'react-redux';
class Navigation extends Component{

    state = {
        nav_bars_pl: ['Zaczynamy!', 'Umiejętności',  'Skontaktuj się'],
        nav_bars_eng: ['Here we go!', 'My skills', 'Contact details'],
        paths: ['/Start', '/Skills', '/Hire']
    }

    render(){
        let navID = 0;
        return(
            <div className={classes.wrapper}>
                <div className={classes.list} onMouseOver={this.props.onMouseOver}>
                        {this.props.language === 'PL' 
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
                <Settings/>
             </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        language : state.language,
        theme : state.theme
    }
}

export default connect(mapStateToProps)(withRouter(Navigation));