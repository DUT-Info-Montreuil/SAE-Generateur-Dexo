const exportPDFButton = document.getElementById("export-pdf-button");


exportPDFButton.addEventListener("click", () => {
    html2pdf()
        .set({
            image: {type: 'jpeg', quality: 1},
            html2canvas: {scale: 4, useCORS: true}
        })
        .from(document.querySelector("#exercises"))
        .save();
});
