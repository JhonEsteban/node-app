const { request, response } = require('express');

const mongoose = require('mongoose');

const validateTaskId = (req = request, res = response, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Identificador no válido',
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = validateTaskId;
