var fs = require('fs');

//vamos a adjuntar contenido al archivo ya existente mynewfile1 usando fs.appendFile().
fs.appendFile('mynewfile1.txt', 'Hola! soy el texto añadido con la update!!', function(err) {
    if (err) throw err;
    console.log('File updated!');
})