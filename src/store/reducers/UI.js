import * as actionTypes from '../actions/actionTypes';

const initialState = {
    language: 'ENG',
    theme: 'LIGHT'
}

const changeLanguage = (state, action) => {
    return {
        ...state,
        language: action.language
    }
}

const changeTheme = (state, action) => {
    return {
        ...state,
        theme: action.theme
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHANGE_LANGUAGE: 
            return changeLanguage(state, action);
        case actionTypes.CHANGE_THEME: 
            return changeTheme(state, action);
        default: 
            return state;
    }
}

export default reducer;