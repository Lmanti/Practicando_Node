var fs = require('fs');

//crear un nuevo archivo usando fs.appendFile().
fs.appendFile('mynewfile1.txt','Hello content!, this is a practice!', function(err) {
    if (err) throw err;
    console.log('File saved!');
})

//crea un archivo con texto o adjunta contenido a un archivo.