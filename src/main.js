function popin(text){
    let div = document.getElementById("popInErrorDiv");
    let elem = document.createElement("div");
    

    elem.textContent = text;
    div.insertBefore(elem,div.firstChild);
    elem.classList.add("popInElement");

    setTimeout(() => {
        div.removeChild(elem);
    },8000)
}