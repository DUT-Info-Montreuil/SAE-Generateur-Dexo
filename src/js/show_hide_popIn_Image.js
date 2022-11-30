///////////////////To show Image Menu (from vue_home.php)///////////////////////
const iframeImgMenu = document.getElementById("pop-in_Image");
const openMenuImage = document.getElementById("menuImg");

openMenuImage.onclick = function() {
    if (iframeImgMenu.style.display == 'block')
        iframeImgMenu.style.display = 'none';
    else
        iframeImgMenu.style.display = 'block';
};

iframeImgMenu.addEventListener('load', function() {
    const exitMenu = iframeImgMenu.contentDocument.getElementById("exit");

    exitMenu.onclick = function() {
        if (iframeImgMenu.style.display == 'block')
            iframeImgMenu.style.display = 'none';
        else
            iframeImgMenu.style.display = 'block';
    }
});