const { request, response } = require('express');

const authorData = {
  name: 'Node Tasks App',
  author: 'Jhon Esteban Herrera',
  public: true,
};

const initialApp = (req = request, res = response) => {
  res.json(authorData);
};

module.exports = initialApp;
