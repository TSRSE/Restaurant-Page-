import createHeader from "../header"
import createButton from "../button"

function getLandingPageLayout(){

    const body = document.getElementById('content')
    let background = document.createElement('div')
    background.classList.add('back-image')
    body.appendChild(background)
    body.appendChild(createHeader())

    let emptyCenterPlace = document.createElement('div')
    emptyCenterPlace.classList.add('header-block-container')

    let logoImage = document.createElement('img')
    logoImage.setAttribute('src','../src/icons/Logo.svg')
    emptyCenterPlace.appendChild(logoImage)

    let button = createButton('big','ЗАБРОНИРОВАТЬ')
    emptyCenterPlace.appendChild(button)

    body.appendChild(emptyCenterPlace)

    return document.createElement('div')
}
export default getLandingPageLayout