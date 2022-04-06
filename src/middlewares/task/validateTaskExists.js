const { request, response } = require('express');

const Task = require('../../models/task.model');

const validateTaskExists = async (req = request, res = response, next) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const dbTask = await Task.findOne({ _id: id, userId });

    if (!dbTask) {
      return res.status(404).json({
        message: 'No existe una tarea con ese identificador',
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = validateTaskExists;
