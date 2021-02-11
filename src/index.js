import {createNavbar,createHome,createFooter} from './modules/homePage'
import {createMenu} from './modules/menu'
import {createStory} from './modules/story'
import {createVisit} from './modules/visit'

function toggleActive(element){
    let content = document.querySelector('#content');
    content.innerHTML="";
    let navBar = createNavbar();
    content.appendChild(navBar);
    switch(element){
        case 'Café Docle':
            document.querySelector('#home').setAttribute('id','active');
            content.appendChild(createHome());
            break;
        case 'Home':
            document.querySelector('#home').setAttribute('id','active');
            content.appendChild(createHome());
            break;
        case 'Menu':
            document.querySelector('#menu').setAttribute('id','active');
            content.appendChild(createMenu());
            break;
        case 'Our Story':
            document.querySelector('#story').setAttribute('id','active');
            content.appendChild(createStory());
            break;
        case 'Visit Us':
            document.querySelector('#visit').setAttribute('id','active');
            content.appendChild(createVisit());
    };

    let footer = createFooter();
    content.appendChild(footer);

    const links = document.querySelectorAll('.link');
    links.forEach(link=>link.addEventListener('click',(e)=>
    {toggleActive(e.target.textContent)}));

    document.querySelector('#titleLink').addEventListener('click',(e)=>
    {toggleActive(e.target.textContent)});
}

function pageLoad(){
    let content = document.querySelector('#content');
    let navBar = createNavbar();
    let home = createHome();
    let footer = createFooter();
    content.appendChild(navBar);
    content.appendChild(home);
    content.appendChild(footer);

    const links = document.querySelectorAll('.link');
    links.forEach(link=>link.addEventListener('click',(e)=>
    {toggleActive(e.target.textContent)}));
    const homeLink = document.querySelector('#home');
    homeLink.setAttribute('id','active');

    document.querySelector('#titleLink').addEventListener('click',(e)=>
    {toggleActive(e.target.textContent)});
}

pageLoad();