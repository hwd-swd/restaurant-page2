function createVisit(){
    let visit = document.createElement('div');
    visit.setAttribute('class','visit');

    let header = document.createElement('h1');
    header.textContent="Visit Us";
    visit.appendChild(header);

    let visitText = document.createElement('p');
    visitText.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    visitText.setAttribute('id','visitText');
    visit.appendChild(visitText);
    return visit
}

export {createVisit}