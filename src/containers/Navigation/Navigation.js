import React, { Component } from 'react';
import classes from './Navigation.module.css';
import {NavLink, withRouter} from 'react-router-dom';
import Settings from '../Settings/settings';
import {connect} from 'react-redux';
import {toggleButton} from '../../shared/transitionClasses'
import {CSSTransition} from 'react-transition-group'

class Navigation extends Component{
    state = {
        nav_bars_pl: ['Zaczynamy!', 'Umiejętności',  'Skontaktuj się'],
        nav_bars_eng: ['Here we go!', 'My skills', 'Contact details'],
        paths: ['/Start', '/Skills', '/Hire'],
        menuActive: false
    }

    clickHandler(){
        const menu = document.getElementById('menu')
        menu.classList.toggle(classes.activeMenu)
        this.setState(prevState => (
            {menuActive: !prevState.menuActive}
        ))
    }

    toggleMenu(){
        if(this.state.menuActive){
            if(!this.props.showMenuButton){
                const menu = document.getElementById('menu')
                menu.classList.toggle(classes.activeMenu)
                this.setState(prevState => (
                    {menuActive: !prevState.menuActive}
                ))
            }
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.toggleMenu.bind(this))
    }

    render(){
        let navID = 0;
        return(
            <div>
                <CSSTransition 
                    in={this.props.showMenuButton}
                    classNames={toggleButton}
                    timeout={0}>
                    <div className={classes.toggleMenu} onClick={this.clickHandler.bind(this)}>
                        <div className={classes.burger}></div>
                    </div>
                </CSSTransition>
                <div className={classes.wrapper} id="menu">
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
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        language : state.language,
        theme : state.theme,
        showMenuButton: state.buttonVisible
    }
}

export default connect(mapStateToProps)(withRouter(Navigation));