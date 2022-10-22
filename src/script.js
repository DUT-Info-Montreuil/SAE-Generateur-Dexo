
const vars = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

let head_element = document.getElementsByTagName("head");
const connexion_css_path = "../res/style.css";
const home_page_css_path = "../res/home-page.css";

window.onload = function() {
    for (let i = 0; i < vars.length; i++) {
        let name_var = vars[i].split('=')[0];
        let value_var = vars[i].split('=')[1];

        if (name_var === "status") {
            if (value_var === "register") {
                // TODO Make a function for that:
                const connexion_link_css = document.createElement("link");
                connexion_link_css.setAttribute("href", connexion_css_path);
                connexion_link_css.setAttribute("rel", "stylesheet")

                head_element[0].appendChild(connexion_link_css);
            }
        } else {
            const home_link_css = document.createElement("link");
            home_link_css.setAttribute("href", home_page_css_path);
            home_link_css.setAttribute("rel", "stylesheet")

            head_element[0].appendChild(home_link_css);
        }
    }
}


