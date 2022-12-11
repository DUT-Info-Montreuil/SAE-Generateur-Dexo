const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
];
const urlTypes = [
    /.gif/,
    /.jpeg/,
    /.jpg/,
    /.png/,
];

const addImageMenu = document.getElementById("addImage");
const input = addImageMenu.querySelector('#image_uploads');
const preview = addImageMenu.querySelector('.preview');
const dataMenu = addImageMenu.querySelector('.dataMenu');
const numberImg = addImageMenu.querySelector('.numberImg');

input.addEventListener('change', addImageFromDirectory);

function change() {
    if (preview.childElementCount === 0) {
        dataMenu.textContent = 'No picture are currently added for upload';
        numberImg.style.display = 'none';
    } else {
        dataMenu.textContent = 'Number of picture  : ';
        numberImg.style.display = 'block';
    }
}

function validFileType(file) {
    return fileTypes.includes(file.type);
}

/////////// Add Image From Directory////////////////

function addImageFromDirectory() {
    const curFiles = input.files;
    for (const file of curFiles) {
        if (validFileType(file)) {
            const image = document.createElement('img');
            image.src = URL.createObjectURL(file);
            ajoutPreview(image);
        } else {
            //do a alert not good file select
        }
    }
}

$( ///// Add Image From Url////
    function() {
        $("#get-image-url").click(
            function() {
                let url = $("#image-url").val();
                if (isImage(url)) {
                    var image = new Image();
                    image.src = url;
                    image.addEventListener('load', function() {
                        if (image.complete) {
                            ajoutPreview(image);
                        }
                    })
                }
            }
        );
    }
);

function isImage(url) {
    if (url) {
        console.log(url);
        for (let i = 0; i < urlTypes.length; i++) {
            if (urlTypes[i].test(url)) return true;
        }
    } else
        return false;
}

function ajoutPreview(image) {

    const div = document.createElement('div');
    image.className = 'image_Upload';
    div.appendChild(image);
    div.appendChild(constructDecription());
    //Construct a cross image use for remove element
    const removeBtn = document.createElement('img');
    removeBtn.src = "https://cdn-icons-png.flaticon.com/512/59/59836.png";
    removeBtn.className = 'cross_Remove_Image';

    removeBtn.style.display = supprMode ? 'block' : 'none';
    div.appendChild(removeBtn);

    preview.appendChild(div);
    removeBtn.addEventListener('click', removeUploadImage);

    numberImg.textContent = preview.childElementCount;
    change();
}
//////////////////////////////////////////////
var supprMode = false;
const removeAll = addImageMenu.querySelector("#remove");
removeAll.addEventListener('click', removeImageDisplay);

function removeUploadImage(event) {
    let div = event.target.parentNode;
    preview.removeChild(div);
}

function removeImageDisplay() {
    if (preview.children.length > 0) {
        supprMode = !supprMode;
        if (supprMode) {
            for (const children of preview.children) {
                let removeBtn = children.querySelector(".cross_Remove_Image");
                removeBtn.style.display = "block";
            }
        } else {
            for (const children of preview.children) {
                let removeBtn = children.querySelector(".cross_Remove_Image");
                removeBtn.style.display = "none";
            }
        }
    } else {
        supprMode = false;
    }
}

///////////////////////////////////////////
const uploadImage = addImageMenu.querySelector('#uploadImage');
uploadImage.addEventListener('click', uploadFile);

function uploadFile() {
    let image_to_upload = new Array();
    for (let i = 0; i < preview.children.length; i++) {
        image_to_upload.push(getImageJson(preview.children[i]));
    }
    
    var jsonString = JSON.stringify(image_to_upload);
    $.ajax({
        type: "POST",
        url: '../ajax/send_image.php',
        data: ({ "image_Json": jsonString })
    }).then(function(re) { console.log(re); })
}

function getBase64Image(img) {
    if(!img.src.includes('blob:http://localhost/')){
        return img.src;
    }
    const canvas = document.createElement("CANVAS");
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext("2d").drawImage(img, 0, 0);
    let extension = 'image/'+img.src.split('.').at(-1);
    return canvas.toDataURL(extension);
}

function getImageJson(div){
    let image = div.getElementsByTagName('img')[0];
    let name = div.getElementsByClassName('name');
    let share = div.getElementsByClassName('share');
    name = $(name).val();
    share = $(share).is(":checked");
    let url = getBase64Image(image);

    const obj = {url: url, name: name, share: share};
    return JSON.stringify(obj);
}

function constructDecription(){
    const span = document.createElement('span');

    const name = document.createElement('input');
    name.className = 'name';
    const share = document.createElement('input');
    share.className = 'share';

    const labelShare = document.createElement('label');

    name.type = "text";
    name.placeholder = "Nom de l'image";
    name.style.width = '60%';
    
    share.type = "checkbox";
    share.name = "share";
    
    labelShare.appendChild(document.createTextNode("Partage"));
    labelShare.for = "share";


    span.appendChild(name);
    span.appendChild(share);
    span.appendChild(labelShare);

    span.style.display = 'flex';
    span.style.justifyContent= 'center';
    span.style.width = '100%';

    return span;
}