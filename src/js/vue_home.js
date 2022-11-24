const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const collapseLogo = this.getElementsByClassName("Hide")[0];
        let content = this.nextElementSibling; //.object-categories
        console.log(content);
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            collapseLogo.style.animationName = "rotateReverse";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            collapseLogo.style.animationName = "rotate";
        }
    });
}