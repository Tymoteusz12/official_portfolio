import * as actionTypes from './actionTypes';

export const changeLanguage = (lang) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        language: lang
    }
}

export const changeTheme = (themeArg) => {
    return {
        type: actionTypes.CHANGE_THEME,
        theme: themeArg
    }
}