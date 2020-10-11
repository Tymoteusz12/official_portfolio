import * as actionTypes from '../actions/actionTypes';

const initialState = {
    language: 'ENG',
    buttonVisible: true,
    theme: false
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
        theme: !state.theme
    }
}

const toggleMenuButton = (state, action) => {
    return {
        ...state,
        buttonVisible: action.buttonVisible
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHANGE_LANGUAGE: 
            return changeLanguage(state, action);
        case actionTypes.CHANGE_THEME: 
            return changeTheme(state, action);
        case actionTypes.TOGGLE_MENU_BUTTON:
            return toggleMenuButton(state, action);
        default: 
            return state;
    }
}

export default reducer;