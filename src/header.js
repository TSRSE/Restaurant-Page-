function createHeader(){
    console.log('header');

    let HEADER = document.createElement('header')

    let logo = document.createElement('img')
    logo.setAttribute('src','../src/icons/Logo.svg')
    logo.setAttribute('alt', 'logo')

    HEADER.appendChild(logo)

    let linksContainer = document.createElement('ul')
    let myHtml = '<li><a class="a-small" href="#">О РЕСТОРАНЕ</a></li>' +
    '<li><a class="a-small" href="#">меню</a></li>' +
    '<li><a class="a-small" href="#">галерея</a></li>' +
    '<li><a class="a-small" href="#">контакты</a></li>';

    linksContainer.innerHTML = myHtml
    
    HEADER.appendChild(linksContainer)

    let reserveHref = document.createElement('a')
    reserveHref.setAttribute('href','#')
    reserveHref.innerText = 'Зарезервировать';

    HEADER.appendChild(reserveHref)

    return HEADER
}
export default createHeader