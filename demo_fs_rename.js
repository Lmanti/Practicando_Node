var fs = require('fs');

// vamos a renombrar mynewfile1.txt con el metodo fs.rename().
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
    if (err) throw err;
    console.log('File renamed!');
})