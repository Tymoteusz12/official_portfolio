import React, { Component } from 'react';
import classes from './settings.module.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Settings extends Component{

    changeToEnglish = () => {
        if(this.props.language !== 'ENG')
            this.props.changeLanguage('ENG');
    }

    changeToPolish= () =>{
        if(this.props.language !== 'PL')
            this.props.changeLanguage('PL');
    }

    render(){
        return(
            <div className={classes.toggleWrapper}>
                <div className={classes.language} onClick={this.changeToPolish}>
                <p className={
                        this.props.language === 'PL' 
                        ? classes.active
                        : null}>PL</p>
                </div>
                <div className={classes.language} onClick={this.changeToEnglish}>
                    <p className={
                        this.props.language === 'ENG' 
                        ? classes.active
                        : null}>ENG</p>
                </div>    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language : state.language,
        theme : state.theme
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeLanguage: (language) => dispatch(actions.changeLanguage(language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);