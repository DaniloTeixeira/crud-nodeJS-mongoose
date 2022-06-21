const mongoose = require('mongoose');

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.y2n877u.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log('Erro na conexão com o BD:', error);
        }
        return console.log('Conexão com o BD realizada com sucesso!');
    });
};

module.exports = connectToDataBase;