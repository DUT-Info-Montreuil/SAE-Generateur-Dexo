const group = document.getElementById("group");
const headerContainer = document.getElementById('header-container');
const pdfExport = document.getElementById("export-pdf-button");
const editHeader = document.getElementById("edit-header-container");
const validate = document.getElementById("valid");
const cancel = document.getElementById("cancel");
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const type = document.getElementById('type');
const subType = document.getElementById('subtype');
const idGroup = document.getElementById('idGroup')
const titleEdit = document.getElementById('title-edit');
const subtitleEdit = document.getElementById('subtitle-edit');
const typeEdit = document.getElementById('type-edit');
const subtypeEdit = document.getElementById('subtype-edit');
const groupEdit = document.getElementById('group-edit');
createAndRotateGroup();
headerContainer.addEventListener("dblclick", () => {
    if (editHeader.style.display !== 'flex') {
        setData()
        editHeader.style.display = 'flex';
        pdfExport.style.display = "none";
    }
})
cancel.addEventListener('click', () => {
    editHeader.style.display = 'none';
    pdfExport.style.display = "block";
})

validate.addEventListener('click', () => {
    editHeader.style.display = 'none';
    pdfExport.style.display = "block";
    resetDatas();
})

function resetDatas() {
    title.textContent = titleEdit.value;
    subtitle.textContent = subtitleEdit.value;
    type.textContent = typeEdit.value;
    subType.textContent = subtypeEdit.value;
    idGroup.textContent = groupEdit.value;
}

function setData() {
    titleEdit.value = title.textContent;
    subtitleEdit.value = subtitle.textContent;
    typeEdit.value = type.textContent;
    subtypeEdit.value = subType.textContent;
    groupEdit.value = idGroup.textContent;
}

function createAndRotateGroup() {
    group.innerHTML = group.textContent.replace(/\S/g, "<span class='circle-text'>$&</span>");
    const cicledText = document.getElementsByClassName('circle-text');
    const maxRotat = 180 / cicledText.length;
    for (let i = 0; i < cicledText.length; i++) {
        let test = (maxRotat * i) - 85;
        cicledText[i].style.transform = "rotate(" + test + "deg)";
    }
}