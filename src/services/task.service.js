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
  }

  async updateTaskById(taskId, userId, newTask) {
    await Task.findOneAndUpdate({ _id: taskId, userId }, newTask);
  }

  async deleteTaskById(taskId, userId) {
    await Task.deleteOne({ _id: taskId, userId });
  }
}

module.exports = TaskService;
