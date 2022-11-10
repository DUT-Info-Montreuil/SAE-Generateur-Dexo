function popin(text,isPermanent = true){
    const div = document.getElementById("pop-in-info-div");
    const elem = document.createElement("div");
    const paragraph = document.createElement("p");


    paragraph.textContent = text;
    paragraph.style.textAlign = 'center';

    elem.appendChild(paragraph);
    div.insertBefore(elem,div.firstChild);
    elem.classList.add("pop-in-element");

    if (!isPermanent) {
        elem.classList.add("pop-in-dissapear")
        setTimeout(() => {
            div.removeChild(elem);
        },8000)
    }
}