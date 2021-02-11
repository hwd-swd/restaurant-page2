function createVisit(){
    let visit = document.createElement('div');
    visit.setAttribute('class','visit');
    visit.textContent="visit";

    return visit
}

export {createVisit}