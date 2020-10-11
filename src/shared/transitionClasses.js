import classes from './transition.module.css';

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

export const moveImage = {
    enter: classes['image-enter'],
    enterActive: classes['image-enter-active'],
    enterDone: classes['image-enter-done'],
    exit: classes['image-exit'],
    exitDone: classes['image-exit-done']
}

export const toggleButton = {
    enter: classes['button-enter'],
    enterActive: classes['button-enter-active'],
    enterDone: classes['button-enter-done'],
    exit: classes['button-exit'],
    exitDone: classes['button-exit-done']
}
