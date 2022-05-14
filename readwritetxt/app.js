//Crear archivos .txt
var fs = require('fs');

var info = 'Node.js está ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos,y está diseñado para crear aplicaciones network escalables.';
fs.writeFile('NodeJS.txt', info, function (err) {
    if (err) {
        console.log(err);
    } else {

        //Leer archivos .txt
        console.log(" ");
        console.log('¡El archivo se ha creado correctamente!');

        fs.readFile('NodeJS.txt','utf8', function (err, datos) {
            console.log("A continuación, se mostrará la información contenida en el documento.");
            console.log(" ");
        
            if (err) {
                console.log(err);
                console.log(" ");
            } else {
                console.log(datos);
                console.log(" ");
            }
        });
    }
});



