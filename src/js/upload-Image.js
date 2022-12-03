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


const object = document.getElementById("pop-in_Image");
object.onload = function () {
    const doc = object.contentDocument;

    const addImageMenu = doc.getElementById("addImage");

    const exitMenu = addImageMenu.querySelector("#exit");

    const input = addImageMenu.querySelector('#image_uploads');
    const preview = addImageMenu.querySelector('.preview');
    const dataMenu = addImageMenu.querySelector('.dataMenu');
    const numberImg = addImageMenu.querySelector('.numberImg');
    const remove = addImageMenu.querySelector("#remove");

    remove.addEventListener('click', removeImageDisplay);
    exitMenu.addEventListener('click', hide);
    input.addEventListener('change', addImageFromDirectory);

    function hide() {
        object.style.display = 'none';
    };

    function validFileType(file) {
        return fileTypes.includes(file.type);
    }

    var supprMode = false;

    //////////////////// Add Image ////////////////

    function addImageFromDirectory() {
        const curFiles = input.files;
        for (const file of curFiles) {
            if (validFileType(file)) {
                const image = doc.createElement('img');
                image.className = 'image_Upload';
                image.src = URL.createObjectURL(file);
                ajoutPreview(image);
            } else {
                //do a alert  not good file select
            }
        }
    }

    $(
        ///// Add Image From Url////
        function () {
            $("#get-image-url").click(
                function () {
                    var image = new Image();
                    image.src = $("#image-url").val();
                    ajoutPreview(image);
                    console.log('ajoutPreview');
                }
            );
        }
    );
    //////////////////////////////////////////////

    preview.addEventListener('change', function () {
        console.log(preview.children)
        if (preview.children.length === 0) {
            dataMenu.textContent = 'No picture are currently added for upload';
            numberImg.style.display = 'none';
        } else {
            dataMenu.textContent = 'Number of picture  : ';
            numberImg.style.display = 'block';
        }
    });

    function ajoutPreview(image) {

        const div = doc.createElement('div');
        div.appendChild(image);

        //Construct a cross image use for remove element
        const removeBtn = doc.createElement('img');
        removeBtn.src = "https://cdn-icons-png.flaticon.com/512/59/59836.png";
        removeBtn.className = 'cross_Remove_Image';

        removeBtn.style.display = supprMode ? 'block' : 'none';
        div.appendChild(removeBtn);

        preview.appendChild(div);

        removeBtn.onclick = function () {
            removeFileFromFileList(div);
            preview.removeChild(div);
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

    function indexOfPreview(node) {
        for (let i = 0; i < preview.children.length; i++) {
            if (node.isEqualNode(preview.children[i])) {
                return i;
            }
        }
        return null;
    }

    function removeFileFromFileList(node) {
        const dt = new DataTransfer();
        let index = indexOfPreview(node);
        const {files} = input;
        if (index !== null) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (index !== i)
                    dt.items.add(file);
            }
            input.files = dt.files;
            console.log(input.files);
        }
    }
}