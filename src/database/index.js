const mongoose = require('mongoose');

const connectToDB = async () => {
  const uriBase = 'mongodb://localhost:27017';
  const dbName = process.env.DB_NAME;

  try {
    await mongoose.connect(`${uriBase}/${dbName}`);

    console.log('Conexion exitosa a la DB!!');
  } catch (error) {
    console.log('Error al conectarse a la DB :-(');

    return error;
  }
};

module.exports = connectToDB;
