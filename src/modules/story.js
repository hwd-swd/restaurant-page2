function createStory(){
    let story = document.createElement('div');
    story.setAttribute('class','story');
    story.textContent="story";

    return story
}

export {createStory}