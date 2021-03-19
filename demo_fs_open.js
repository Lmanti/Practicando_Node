var fs = require('fs');

//crear un archivo usando el metodo fs.open(), si de 2do parametro se le coloca 'w' (writing) entonces este archivo estará abierto para la escritura.
fs.open('mynewfile2.txt', 'w', function(err) {
    if (err) throw err;
    console.log('File saved!');
})

//crea un archivo vacio.