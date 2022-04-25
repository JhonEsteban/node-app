const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const connectToDB = require('../database');

const {
  initialRoutes,
  authRoutes,
  userRoutes,
  taskRoutes,
} = require('../routes');

class Server {
  constructor() {
    this.app = express();
    this.apiBase = '/api/v1';
    this.port = process.env.PORT || 3000;

    this.fileUploadConfig = {
      useTempFiles: true,
      tempFileDir: '/tmp/',
    };

    this.setMiddlewares();
    this.setRoutes();

    connectToDB();
  }

  get getApp() {
    return this.getApp;
  }

  get getApiBase() {
    return this.apiBase;
  }

  get getServerApp() {
    return this.serverApp;
  }

  setMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(fileUpload(this.fileUploadConfig));
  }

  setRoutes() {
    this.app.use(`${this.apiBase}`, initialRoutes);
    this.app.use(`${this.apiBase}/auth`, authRoutes);
    this.app.use(`${this.apiBase}/users`, userRoutes);
    this.app.use(`${this.apiBase}/tasks`, taskRoutes);
  }

  run() {
    this.serverApp = this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}/`);
    });
  }
}

module.exports = Server;
