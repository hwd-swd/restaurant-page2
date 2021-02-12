function createStory(){
    let story = document.createElement('div');
    story.setAttribute('class','story');

    let header = document.createElement('h1');
    header.textContent="Our Story";
    story.appendChild(header);

    let storyText = document.createElement('p');
    storyText.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    storyText.setAttribute('id','storyText');
    story.appendChild(storyText);
    return story
}

export {createStory}