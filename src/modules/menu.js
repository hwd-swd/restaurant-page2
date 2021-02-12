function createMenu(){
    let menu = document.createElement('div');
    menu.setAttribute('class','menu');

    let header = document.createElement('h1');
    header.textContent='Menu';
    menu.appendChild(header);

    let menuItems = document.createElement('div');
    menuItems.setAttribute('class','menuItems');
    menu.appendChild(menuItems);

    let menu1 = createMenuItem('Macaron',1);
    menuItems.appendChild(menu1);

    let menu2 = createMenuItem('Croissant',2);
    menuItems.appendChild(menu2);

    let menu3 = createMenuItem('Mille Feuille',3);
    menuItems.appendChild(menu3);

    let menu4 = createMenuItem('Viet Coffee',4);
    menuItems.appendChild(menu4);

    return menu
}

function createMenuItem(itemName,itemNum){
    let src = ['./imgs/macarons.jpg','./imgs/croissant.jpg','./imgs/mille-feuille.jpg','./imgs/viet-coffee.jpg']

    let menuContainer = document.createElement('div');
    menuContainer.setAttribute('class','menuContainer');

    let menuImage = document.createElement('img');
    menuImage.src = src[itemNum-1];
    menuContainer.appendChild(menuImage);

    let menuName = document.createElement('h2');
    menuName.textContent=`${itemName}`;
    menuContainer.appendChild(menuName);
    
    let menuDesc = document.createElement('h3');
    menuDesc.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    menuContainer.appendChild(menuDesc);

    return menuContainer
}

export {createMenu}