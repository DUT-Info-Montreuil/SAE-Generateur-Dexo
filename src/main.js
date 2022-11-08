function popin(text,isPermanent = true){
    let div = document.getElementById("popInInfoDiv");
    let elem = document.createElement("div");
    let paragraph = document.createElement("p");


    paragraph.textContent = text;
    paragraph.style.textAlign = 'center';

    elem.appendChild(paragraph);
    div.insertBefore(elem,div.firstChild);
    elem.classList.add("popInElement");

    if (isPermanent === false) {
        elem.classList.add("popInDissapear")
        setTimeout(() => {
            div.removeChild(elem);
        },8000)
    }
}