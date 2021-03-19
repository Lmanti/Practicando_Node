var fs = require('fs');

//crea un archivo con el metodo fs.writeFile() que reemplaza el archivo con el mismo nombre y su contenido, si no hay, lo crea nuevo.
fs.writeFile('mynewfile3.txt', 'Hello! im doing my best!!', function(err) {
    if (err) throw err;
    console.log('File saved!');
})