const exportPDFButton = document.getElementById("export-pdf-button");
let A4Page = document.getElementById("A4-exo-iframe");


A4Page.addEventListener("load", () => {
    exportPDFButton.addEventListener("click", () => {

        html2pdf()
            .set({
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
                html2canvas: {
                    windowWidth: "21cm",
                    windowHeight: "29.7cm",
                    foreignObjectRendering: true
                },
                jsPDF: {
                    unit: "cm",
                    hotfixes: ["px_scaling"]
                }
            })
            .from(A4Page.contentDocument.getElementById("A4-paper"))
            .save();
    });
});
