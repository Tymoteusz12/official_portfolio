import classes from './transition.module.css';
import buttonClasses from '../containers/Settings/toggleTheme/toggle.module.css';

export const textSmoothTransition = {
    enter: classes['textToggle-enter'],
    enterActive: classes['textToggle-enter-active'],
    enterDone: classes['textToggle-enter-done'],
    exit: classes['textToggle-exit'],
    exitDone: classes['textToggle-exit-done']
}

export const imgSmoothTransition = {
    enter: classes['imgToggle-enter'],
    enterActive: classes['imgToggle-enter-active'],
    enterDone: classes['imgToggle-enter-done'],
    exit: classes['imgToggle-exit'],
    exitDone: classes['imgToggle-exit-done']
}

export const pageTransition = {
    enter: classes['page-enter'],
    enterActive: classes['page-enter-active'],
    enterDone: classes['page-enter-done'],
    exit: classes['page-exit'],
    exitDone: classes['page-exit-done']
}

export const buttonChanger={
    enter: buttonClasses['buttonToggle-enter'],
    enterActive: buttonClasses['buttonToggle-enter-active'],
    enterDone: buttonClasses['buttonToggle-enter-done'],
    exit: buttonClasses['buttonToggle-exit'],
    exitDone: buttonClasses['buttonToggle-exit-done']
}