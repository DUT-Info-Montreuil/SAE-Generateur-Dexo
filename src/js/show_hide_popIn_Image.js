///////////////////To show Image Menu (from vue_home.php)///////////////////////
window.addEventListener('load', function () {
    const iframeImgMenu = document.getElementById("pop-in_Image");
    const openMenuImage = document.getElementById("menuImg");
    const exitMenu = iframeImgMenu.contentDocument.getElementById("exit");

    exitMenu.onclick = function () {
        if (iframeImgMenu.style.display === 'block')
            iframeImgMenu.style.display = 'none';
        else iframeImgMenu.style.display = 'block';
    }

    openMenuImage.onclick = function () {
        if (iframeImgMenu.style.display === 'block')
            iframeImgMenu.style.display = 'none';
        else iframeImgMenu.style.display = 'block';
    };
});