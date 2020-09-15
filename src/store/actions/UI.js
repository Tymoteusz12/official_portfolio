import * as actionTypes from './actionTypes';

export const changeLanguage = (lang) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        language: lang
    }
}

export const changeTheme = (themeType) => {
    return {
        type: actionTypes.CHANGE_THEME,
        theme: themeType
    }
}