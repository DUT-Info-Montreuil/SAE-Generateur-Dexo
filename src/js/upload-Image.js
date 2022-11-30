var imgArray = new Array();
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
const addImageMenu = document.getElementById("addImage");
const input = addImageMenu.querySelector('#image_uploads');
const preview = addImageMenu.querySelector('.preview');
const dataMenu = addImageMenu.querySelector('.dataMenu');
const numberImg = addImageMenu.querySelector('.numberImg');
const remove = addImageMenu.querySelector("#remove");

remove.addEventListener('click', removeImageDisplay);
input.addEventListener('change', addImageFromDirectory);

///////////////////To hide Image Menu (from upload_image.html)//////////////////




function validFileType(file) {
    return fileTypes.includes(file.type);
}

var supprMode = true;

//////////////////// Add Image ////////////////

function addImageFromDirectory() {
    const curFiles = input.files;
    for (const file of curFiles) {
        if (validFileType(file)) {
            const image = document.createElement('img');
            image.className = 'image_Upload';
            image.src = URL.createObjectURL(file);
            imgArray.push(image);
            ajoutPreview(image);
        } else {
            //do a alert not good file select
        }
    }
}

$(
    ///// Add Image From Url////
    function() {
        $("#get-image-url").click(
            function() {
                var image = new Image();
                image.src = $("#image-url").val();
                imgArray.push(image);
                ajoutPreview(image);
            }
        );
    }
);
//////////////////////////////////////////////

preview.addEventListener('change', function() {
    if (preview.children.length === 0) {
        dataMenu.textContent = 'No picture are currently added for upload';
        numberImg.style.display = 'none';
    } else {
        dataMenu.textContent = 'Number of picture  : ';
        numberImg.style.display = 'block';
    }
});

function ajoutPreview(image) {

    const div = document.createElement('div');
    div.appendChild(image);

    //Construct a cross image use for remove element
    const removeBtn = document.createElement('img');
    removeBtn.src = "https://cdn-icons-png.flaticon.com/512/59/59836.png";
    removeBtn.className = 'cross_Remove_Image';

    removeBtn.style.display = supprMode ? 'block' : 'none';
    div.appendChild(removeBtn);

    preview.appendChild(div);

    removeBtn.onclick = function() {
        removeFileFromFileArrayList(image);
        preview.removeChild(div);
        numberImg.textContent = preview.childElementCount;
    };

    numberImg.textContent = preview.childElementCount;
}

function removeImageDisplay() {
    const curFiles = input.files;
    supprMode = !supprMode;
    if (supprMode) {
        if (curFiles.length === 0) {
            //do a alert  'No picture are currently added for erase';
        } else {
            for (const children of preview.children) {
                let removeBtn = children.querySelector(".cross_Remove_Image");
                removeBtn.style.display = "block";
            }
        }
    } else {
        for (const children of preview.children) {
            let removeBtn = children.querySelector(".cross_Remove_Image");
            removeBtn.style.display = "none";
        }
    }

}

function removeFileFromFileArrayList(img) {
    let index = imgArray.indexOf(img);
    if (index !== null && index > -1) {
        imgArray.splice(index, 1);
    }
}