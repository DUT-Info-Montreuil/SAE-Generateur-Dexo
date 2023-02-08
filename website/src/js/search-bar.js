const imagesSearchContainer = document.getElementById("images-search-container");
const imagesInputSearchBar = document.getElementById("images-input-search-bar");

const bankPicturesContainer = document.getElementById("bank-pictures-container");
const personalPicturesContainer = document.getElementById("personal-pictures-container");


const exercisesSearchContainer = document.getElementById("exercises-search-container");
const exercisesInputSearchBar = document.getElementById("exercises-input-search-bar");

const rootCategorie1 = document.getElementById("root-categorie1").querySelector(".content");
const rootCategorie2 = document.getElementById("root-categorie2").querySelector(".content");
const rootCategorie3 = document.getElementById("root-categorie3").querySelector(".content");
const rootCategorie4 = document.getElementById("root-categorie4").querySelector(".content");


function writeSearchResult(textInput, containerResult, ...containerAtCheck)
{
    const beforeContent = [];
    for (const child of containerResult.children) beforeContent.push(child);
    for (const el of beforeContent) containerResult.removeChild(el);

    if (textInput.trim().length > 0) {
        const listResult = [];
        for (const container of containerAtCheck)
            for (const child of container.children) {
                const attr = child.getAttribute("alt");
                if (attr !== null)
                    if (attr.toLowerCase().includes(textInput.toLowerCase()))
                        listResult.push(child.cloneNode(true));
            }

        for (const result of listResult) {
            result.addEventListener('dragstart', (ev) => draggedElement = ev.target);
            result.addEventListener('dragend', () => draggedElement = null);
            containerResult.appendChild(result);
        }
    }
}


imagesInputSearchBar.addEventListener("input", (ev) => writeSearchResult(ev.target.value, imagesSearchContainer, bankPicturesContainer, personalPicturesContainer));
exercisesInputSearchBar.addEventListener("input", (ev) => writeSearchResult(ev.target.value, exercisesSearchContainer, rootCategorie1, rootCategorie2, rootCategorie3, rootCategorie4));
