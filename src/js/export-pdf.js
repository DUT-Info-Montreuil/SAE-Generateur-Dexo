import { jsPDF } from "jspdf";

const exportPDFButton = document.getElementById("export-pdf-button");

const pdf = new jsPDF();


exportPDFButton.addEventListener("click", () => {
    pdf.text("Hello world!", 10, 10);
    pdf.save("a4.pdf");
});
