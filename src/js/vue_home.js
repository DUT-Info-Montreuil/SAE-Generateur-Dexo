const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const collapseLogo = this.getElementsByClassName("Hide")[0];

        let content = this.nextElementSibling;
        if (content.style.maxHeight) { //(open)
            // if(null) return false
            content.style.maxHeight = null;
            collapseLogo.style.animationName = "rotateReverse";

            //maxHeight sets the maximum height of an element
        } else { //(close)
            // here the maxHeight is null 
            //content.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";
            collapseLogo.style.animationName = "rotate";
            //collapseLogo.style.transform = "rotate(0deg)";
            //scrollHeight return the maximum height of an element 
        }
    });
}

