const PDFDocument = require("pdfkit");

module.exports = function() {
    const doc = new PDFDocument({
        autoFirstPage: false,
        info: {
            Title: "Kohlife"
        },
        size: [595, 841], // A4
        layout: "portrait",
        margin: 0
    });
    return doc;
}