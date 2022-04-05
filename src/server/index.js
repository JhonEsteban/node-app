const express = require('express');
const cors = require('cors');

const connectToDB = require('../database');

const { authRoutes, initialRoutes } = require('../routes');

class Server {
  constructor() {
    this.app = express();
    this.apiBase = '/api/v1';
    this.port = process.env.PORT || 3000;

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
  }

  setRoutes() {
    this.app.use(`${this.apiBase}`, initialRoutes);
    this.app.use(`${this.apiBase}/auth`, authRoutes);
  }

  run() {
    this.serverApp = this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}/`);
    });
  }
}

module.exports = Server;
