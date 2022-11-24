const exoCategory1 = document.getElementById("exos-categorie1");
const exoCategory2 = document.getElementById("exos-categorie2");
const exoCategory3 = document.getElementById("exos-categorie3");
const exoCategory4 = document.getElementById("exos-categorie4");

const checkBoxCategory1 = document.getElementById("checkbox-category1");
const checkBoxCategory2 = document.getElementById("checkbox-category2");
const checkBoxCategory3 = document.getElementById("checkbox-category3");
const checkBoxCategory4 = document.getElementById("checkbox-category4");


checkBoxCategory1.addEventListener("click", () => exoCategory1.style.display = (checkBoxCategory1.checked) ? "block" : "none");
checkBoxCategory2.addEventListener("click", () => exoCategory2.style.display = (checkBoxCategory2.checked) ? "block" : "none");
checkBoxCategory3.addEventListener("click", () => exoCategory3.style.display = (checkBoxCategory3.checked) ? "block" : "none");
checkBoxCategory4.addEventListener("click", () => exoCategory4.style.display = (checkBoxCategory4.checked) ? "block" : "none");