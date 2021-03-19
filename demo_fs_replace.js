var fs = require('fs');

// reemplazaremos el archivo mynewfile3.txt con uno creado nuevamente por el metodo fs.writeFile().
fs.writeFile('mynewfile3.txt', 'If you are looking me here means that i replaced the last .txt file!! ;)', function(err) {
    if (err) throw err;
    console.log('File replaced!');
})