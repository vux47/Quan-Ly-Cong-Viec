import * as taskApi from '../api/task.api';

export const taskService = {
  getTasks: () => taskApi.fetchTasks(),
  createTask: (data) => taskApi.createTask(data),
  updateTask: (id, data) => taskApi.updateTask(id, data),
  deleteTask: (id) => taskApi.deleteTask(id),
};
