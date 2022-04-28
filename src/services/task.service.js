const Task = require('../models/task.model');

class TaskService {
  async getAllTasks(userId) {
    return await Task.find({ userId });
  }

  async getTaskById(taskId, userId) {
    return await Task.findOne({ _id: taskId, userId });
  }

  async createTask(newTask) {
    const task = await new Task(newTask);
    await task.save();

    return task;
  }

  async updateTaskById(taskId, userId, newTask) {
    return await Task.findOneAndUpdate({ _id: taskId, userId }, newTask, {
      new: true,
    });
  }

  async deleteTaskById(taskId, userId) {
    await Task.deleteOne({ _id: taskId, userId });
  }

  async deleteAllTasks(userId) {
    await Task.deleteMany({ userId });
  }
}

module.exports = TaskService;
