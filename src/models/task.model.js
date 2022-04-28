const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

taskSchema.methods.toJSON = function () {
  const taskObj = this.toObject();
  const { userId, _id, ...rest } = taskObj;

  return {
    id: _id,
    ...rest,
  };
};

module.exports = model('Task', taskSchema);
