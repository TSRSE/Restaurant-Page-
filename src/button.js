function createButton(size, content){
    let newButton = document.createElement('button')
    switch (size) {
        case 'big':
            newButton.classList.add('big')
            break;
        case 'medium':
            newButton.classList.add('medium')
            break;
        case 'small':
            newButton.classList.add('small')
            break;
    
        default:
            newButton.classList.add('medium')
            break;
    }
    newButton.innerText = content;
    return newButton
}

export default createButton