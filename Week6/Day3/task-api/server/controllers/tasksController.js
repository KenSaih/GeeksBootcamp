import Task from '../models/Task.js';

export const getAllTasks = (req, res, next) => {
  try {
    const tasks = Task.getTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTaskById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const task = Task.getTaskById(id);
    if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const createTask = (req, res, next) => {
  try {
    const { title, description = '' } = req.body;
    const tasks = Task.getTasks();
    const maxId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0;

    const newTask = {
      id: maxId + 1,
      title,
      description,
    };

    Task.addTask(newTask);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

export const updateTask = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;

    const updatedTask = Task.updateTask(id, { title, description });
    if (!updatedTask) return res.status(404).json({ error: 'Tâche non trouvée' });

    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = Task.deleteTask(id);
    if (!deleted) return res.status(404).json({ error: 'Tâche non trouvée' });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
