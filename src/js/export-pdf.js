const exportPDFButton = document.getElementById("export-pdf-button");


exportPDFButton.addEventListener("click", () => {
    html2pdf()
        .set({html2canvas: {scale: 4}})
        .from(document.querySelector("#exercises"))
        .save();
});
