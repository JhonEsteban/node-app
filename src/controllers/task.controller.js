const { request, response } = require('express');

const TaskService = require('../services/task.service');

const taskService = new TaskService();

const getAllTasks = async (req = request, res = response) => {
  const { userId } = req;

  try {
    const tasks = await taskService.getAllTasks(userId);

    res.json({
      tasks,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTaskById = async (req = request, res = response) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const task = await taskService.getTaskById(id, userId);

    res.json({
      task,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createTask = async (req = request, res = response) => {
  const { userId } = req;

  try {
    await taskService.createTask({ ...req.body, userId });

    res.json({
      message: 'Tarea creada con éxito',
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTaskById = async (req = request, res = response) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    await taskService.updateTaskById(id, userId, req.body);

    res.json({
      message: 'Tarea actualizada con éxito',
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTaskById = async (req = request, res = response) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    await taskService.deleteTaskById(id, userId);

    res.json({
      message: 'Tarea eliminada con éxito',
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
