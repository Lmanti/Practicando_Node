var fs = require('fs');

//vamos a eliminar el archivo mynewfile2.txt usando el metodo fs.unlink().
fs.unlink('mynewfile2.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
})