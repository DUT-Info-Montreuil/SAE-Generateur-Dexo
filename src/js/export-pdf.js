const exportPDFButton = document.getElementById("export-pdf-button");


exportPDFButton.addEventListener("click", () => {
    html2pdf()
        .from(document.querySelector("#exercises"))
        .save();
});
