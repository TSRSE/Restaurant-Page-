import createFooter from "./footer"
import createHeader from "./header"
import getLandingPageLayout from "./pages/landing"
import createButton from "./button"

(function(){
    const body = document.getElementById('content')
    body.appendChild(getLandingPageLayout())
})()