///////////////////To show Image Menu (from vue_home.php)///////////////////////
const iframeImgMenu = document.getElementById("pop-in_Image");

function showHideMenuImage() {
    if (iframeImgMenu.style.display == 'block')
        iframeImgMenu.style.display = 'none';
    else
        iframeImgMenu.style.display = 'block';
};
///////////////////To hide Image Menu (from upload_image.html)//////////////////