const fs = require('fs');
const path = require('path');

//? Criar uma pasta - Métodos assíncronos
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//         return console.log('Erro:', error);
//     }

//     console.log('Pasta criada com sucesso!');
// });

//? Criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello node!', (error) => {
    if (error) {
        return console.log('Erro:', error);
    }

    console.log('Arquivo criado com sucesso!');

    //?  Alterar um arquivo 
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello world!', (error) => {
        if (error) {
            return console.log('Error:', error);
        }

        console.log('Arquivo alterado com sucesso!');
    });
    //? Ler um arquivo
    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
        if (error) {
            return console.log('Erro', error);
        }

        console.log(data);
    });
});

