const imagesSearchContainer = document.getElementById("images-search-container");
const imagesInputSearchBar = document.getElementById("images-input-search-bar");

const bankPicturesContainer = document.getElementById("bank-pictures-container");
const personalPicturesContainer = document.getElementById("personal-pictures-container");


imagesInputSearchBar.addEventListener("change", (ev) => {
    const beforeContent = [];
    for (const child of imagesSearchContainer.children)
        beforeContent.push(child);
    for (const el of beforeContent)
        imagesSearchContainer.removeChild(el);
    const targetSearch = ev.target.value;
    if (targetSearch.trim().length > 0) {
        const listResult = [];

        for (const child of bankPicturesContainer.children)
            if (child.getAttribute("alt").toLowerCase().startsWith(targetSearch.toLowerCase()))
                listResult.push(child.cloneNode(true));
        for (const child of personalPicturesContainer.children)
            if (child.getAttribute("alt").toLowerCase().startsWith(targetSearch.toLowerCase()))
                listResult.push(child.cloneNode(true));

        for (const result of listResult)
            imagesSearchContainer.appendChild(result);
    }

});
