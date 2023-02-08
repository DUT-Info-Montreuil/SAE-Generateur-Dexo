const hidden = "none";
const show = "block";

const fileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
];

const addImageMenu = document.getElementById("addImage");
const input = addImageMenu.querySelector("#image_uploads");
const preview = addImageMenu.querySelector(".preview");
const dataMenu = addImageMenu.querySelector(".dataMenu");
const numberImg = addImageMenu.querySelector(".numberImg");

input.addEventListener("change", addImageFromDirectory);

function change()
{
    if (preview.childElementCount === 0) {
        dataMenu.textContent = "No picture are currently added for upload";
        numberImg.style.display = hidden;
    } else {
        dataMenu.textContent = "Number of picture  : ";
        numberImg.style.display = show;
    }
}

function validFileType(file) {
    return fileTypes.includes(file.type);
}

/////////// Add Image From Directory////////////////

function addImageFromDirectory()
{
    for (const file of input.files)
        if (validFileType(file)) {
            const image = document.createElement("img");
            image.src = URL.createObjectURL(file);
            addPreview(image);
        }
}


function addPreview(img)
{
    const div = document.createElement("div");
    img.className = "image_Upload";
    div.appendChild(img);
    div.appendChild(buildDescription());
    // Construct a cross image use for remove element
    const removeBtn = document.createElement("img");
    removeBtn.src = "https://cdn-icons-png.flaticon.com/512/59/59836.png";
    removeBtn.className = "cross_Remove_Image";

    removeBtn.style.display = deleteMode ? show : hidden;
    div.appendChild(removeBtn);

    preview.appendChild(div);
    removeBtn.addEventListener("click", removeUploadImage);

    numberImg.textContent = preview.childElementCount.toString();
    change();
}

//////////////////////////////////////////////
let deleteMode = false;
const removeAll = addImageMenu.querySelector("#remove");
removeAll.addEventListener("click", removeImageDisplay);

function removeUploadImage(event) {
    preview.removeChild(event.target.parentNode);
}

function removeImageDisplay()
{
    if (preview.children.length > 0) {
        deleteMode = !deleteMode;
        if (deleteMode) {
            for (const children of preview.children)
                children.querySelector(".cross_Remove_Image").style.display = show;
        } else for (const children of preview.children)
            children.querySelector(".cross_Remove_Image").style.display = hidden;
    } else deleteMode = false;
}

///////////////////////////////////////////
const uploadImage = addImageMenu.querySelector("#uploadImage");
uploadImage.addEventListener("click", uploadFile);

function uploadFile()
{
    const image_to_upload = [];
    for (let i = 0; i < preview.children.length; i++)
        image_to_upload.push(JSON.stringify(getImageJson(preview.children[i])));

    $.ajax({
        type: "POST",
        url: "../ajax/send_image.php",
        data: ({"image_Json": JSON.stringify(image_to_upload)})
    });
}

function getBase64Image(img) {
    const canvas = document.createElement("CANVAS");
    canvas.setAttribute("height", img.naturalHeight);
    canvas.setAttribute("width", img.naturalWidth);
    canvas.getContext("2d").drawImage(img, 0, 0);
    return canvas.toDataURL();
}

function getImageJson(div)
{
    return {
        url: getBase64Image(div.getElementsByTagName('img')[0]),
        name: $(div.getElementsByClassName('name')).val(),
        share: $(div.getElementsByClassName('share')).val()
    };
}

function buildDescription()
{
    const span = document.createElement("span");
    const name = document.createElement("input");
    const share = document.createElement("input");
    const labelShare = document.createElement("label");
    span.style.display = "flex";
    span.style.justifyContent = "center";
    span.style.width = "100%";
    name.className = "name";
    share.className = "share";
    share.type = "checkbox";
    share.name = "share";
    name.type = "text";
    name.placeholder = "Nom de l'image";
    name.style.width = "60%";

    labelShare.appendChild(document.createTextNode("Partage"));
    labelShare.for = "share";

    span.appendChild(name);
    span.appendChild(share);
    span.appendChild(labelShare);

    return span;
}
