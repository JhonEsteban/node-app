const mongoose = require('mongoose');

const connectToDB = async () => {
  const query = process.env.MONGO_QUERY;

  try {
    await mongoose.connect(query);

    console.log('Conexion exitosa a la DB!!');
  } catch (error) {
    console.log('Error al conectarse a la DB :-(');
    console.log(error);
  }
};

module.exports = connectToDB;
