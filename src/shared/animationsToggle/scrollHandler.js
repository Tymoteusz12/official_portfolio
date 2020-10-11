

export const handleScroll = (elemID, divider) => {
    let elem = document.getElementById(elemID);
    let domRect = elem.getBoundingClientRect();

    if(divider > 0){
        if(domRect.y < window.innerHeight / divider) 
            return true;
        else 
            return false;
    }

}