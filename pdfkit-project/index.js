//Crear archivo PDF.
const PDFDocument = require('pdfkit');
const fs = require('fs');

let pdfDoc = new PDFDocument;
pdfDoc.pipe(fs.createWriteStream('Documento.pdf'));

pdfDoc
.fillColor('blue')
pdfDoc.text("¡Hola! Este documento PDF es generado con el módulo pdfkit.", {oblique : true, lineBreak : true,  align: 'left'})
pdfDoc.text(" ",{lineBreak : true})

.fillColor('green')
pdfDoc.text("También nos permite visualizar imágenes.", {lineBreak : true, align: 'left'})
pdfDoc.text(" ",{lineBreak : true})

pdfDoc.image('image.jpg', {width: 150, height: 150});
pdfDoc.end();

console.log(" ")
console.log("¡El archivo PDF se ha creado correctamente!")
console.log(" ")