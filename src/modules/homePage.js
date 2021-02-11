function createNavbar(){
    let navBar = document.createElement('nav');
    navBar.setAttribute('id','navBar')

    let title = document.createElement('h1');
    title.setAttribute('id','titleLink');
    title.textContent="Café Docle";
    navBar.appendChild(title);

    let links = document.createElement('div');
    links.setAttribute('id','links');
    navBar.appendChild(links);

    let home = document.createElement('h2');
    home.setAttribute('class','link');
    home.setAttribute('id','home');
    home.textContent="Home";
    links.appendChild(home);

    let menu = document.createElement('h2');
    menu.setAttribute('class','link');
    menu.setAttribute('id','menu');
    menu.textContent="Menu";
    links.appendChild(menu);

    let story = document.createElement('h2');
    story.setAttribute('class','link');
    story.setAttribute('id','story');
    story.textContent="Our Story";
    links.appendChild(story);

    let visit = document.createElement('h2');
    visit.setAttribute('class','link');
    visit.setAttribute('id','visit');
    visit.textContent="Visit Us";
    links.appendChild(visit);

    return navBar
}

function createHome(){
    let home = document.createElement('div');
    home.setAttribute('class','home');
    home.textContent="home";

    return home
}

function createFooter(){
    let footer = document.createElement('footer');
    footer.setAttribute('id','footer');
    footer.textContent="C 2021 Anthony Nguyen";
    return footer
}

export {createNavbar,createHome,createFooter}