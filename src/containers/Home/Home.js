import React, { Component } from 'react';
import classes from './Home.module.css';
import {withRouter} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {textSmoothTransition, imgSmoothTransition} from '../../shared/transitionClasses';
class Home extends Component {

    state = {
        meetingPL: 'Cześć! Witaj na mojej stronie :). Mam nadzieję, że znajdziesz potrzebne dla ciebie informacje. Aktualnie poszukuję pracy jako junior Front-end / React developer.',
        meetingENG: 'Hey! Welcome on my site. I hope you are going to find informations necessary for you. Currently I am looking for junior Front-end / React developer position.',
        skillsPL: 'Dowiedz się, dlaczego warto mnie zatrudnić',
        skillsENG: 'Find out why I am worth hiring',
        skillsLabelPL: 'Umiejętności',
        skillsLabelENG: 'Abilities',
        componentMount: false
    }

    clickHandler = () => {
        this.props.history.push('/Skills');
    }

    componentDidMount(){
        this.setState({componentMount: true})
    }

    componentWillUnmount(){
        this.setState({componentMount: false})
    }

    render(){
        return(
            <div className={classes.Home}>
                <CSSTransition 
                    in = {this.state.componentMount}
                    classNames={textSmoothTransition}
                    timeout = {{enter: 400, exit: 0}}>
                    <h2>Front-end/React developer</h2>
                </CSSTransition>
                <CSSTransition 
                    in = {this.state.componentMount}
                    classNames={imgSmoothTransition}
                    timeout = {{enter: 1000, exit: 0}}>
                    <div className={classes.paragraph}>
                        <p>
                            {this.props.language === 'PL' 
                            ?   this.state.meetingPL
                            :   this.state.meetingENG}
                        </p>
                    </div>
                </CSSTransition>
                <CSSTransition 
                    in = {this.state.componentMount}
                    classNames={imgSmoothTransition}
                    timeout = {{enter: 1600, exit: 0}}>
                    <div className={classes.general}>
                        <div className={classes.select}>
                            <p>
                                {this.props.language === 'PL' 
                                ? this.state.skillsPL
                                : this.state.skillsENG}
                            </p>
                            <div className={classes.stayButton} 
                                onClick={this.clickHandler}>
                                <p>
                                    {this.props.language === 'PL' 
                                    ? this.state.skillsLabelPL
                                    : this.state.skillsLabelENG}
                                </p>
                            </div>
                        </div>
                    </div>
                 </CSSTransition>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        language : state.UIReducer.language,
        theme : state.UIReducer.theme
    }
}

export default withRouter(Home);