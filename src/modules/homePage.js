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

    let buttons = document.createElement('div');
    buttons.setAttribute('id','buttons');
    home.appendChild(buttons);

    let button1 = document.createElement('h2');
    button1.setAttribute('id','button1');
    button1.textContent='Menu';
    button1.setAttribute('class','link')
    buttons.appendChild(button1);

    let button2 = document.createElement('h2');
    button2.setAttribute('id','button2');
    button2.textContent='Visit Us';
    button2.setAttribute('class','link')
    buttons.appendChild(button2);

    return home
}

function createFooter(){
    let footer = document.createElement('footer');
    footer.setAttribute('id','footer');

    let name = document.createElement('h2');
    name.textContent='By Anthony Nguyen';
    footer.appendChild(name);

    let github = document.createElement('a');
    github.setAttribute('href','https://github.com/hwd-swd/');
    footer.appendChild(github);
    github.setAttribute('id','github');
    return footer
}

export {createNavbar,createHome,createFooter}