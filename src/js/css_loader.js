/* Script created at 22/10/2022 */

const urlVars = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
// Contain all path of style sheet
const pathsCSS =
    {
        "loginRegister": "./css/register-login.css",
        "home": "./css/home-page.css",
    }

/** Create a balise <link> with good path of css according to the page displayed.
 * @param pathCss The relative path of css file */
function createLinkCSS(pathCss)
{
    const htmlLinkElement = document.createElement("link");
    htmlLinkElement.setAttribute("href", pathCss);
    htmlLinkElement.setAttribute("rel", "stylesheet");

    document.getElementsByTagName("head")[0].appendChild(htmlLinkElement);
}

// On load, the function append <link href="..." rel="stylesheet"> into the head balise
window.onload = function()
{
    for (let i = 0; i < urlVars.length; i++) {
        const nameVar = urlVars[i].split('=')[0];
        const valueVar = urlVars[i].split('=')[1];

        if (nameVar === 'module' && valueVar === 'user') {
            createLinkCSS(pathsCSS['loginRegister']);
        } else if (nameVar === 'module' && valueVar === 'home') {
            createLinkCSS(pathsCSS["home"]); // TODO Temporary
        }
    }
}