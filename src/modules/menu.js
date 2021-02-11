function createMenu(){
    let menu = document.createElement('div');
    menu.setAttribute('class','menu');
    menu.textContent="menu";

    return menu
}

export {createMenu}