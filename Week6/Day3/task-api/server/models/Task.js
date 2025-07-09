import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Compatibilité avec __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/tasks.json");

export default class Task {
static readTasks() {
  if (!fs.existsSync(dataPath)) {
    return [];
  }

  const content = fs.readFileSync(dataPath, "utf-8");

  if (!content.trim()) {
    return [];
  }

  return JSON.parse(content);
}


  static writeTasks(tasks) {
    fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
  }

  static getTasks() {
    return this.readTasks();
  }

  static getTaskById(id) {
    const tasks = this.readTasks();
    return tasks.find((task) => task.id === id);
  }

  static addTask(task) {
    const tasks = this.readTasks();
    tasks.push(task);
    this.writeTasks(tasks);
  }

  static updateTask(id, newData) {
    const tasks = this.readTasks();
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) return null;
    tasks[index] = { ...tasks[index], ...newData, id };
    this.writeTasks(tasks);
    return tasks[index];
  }

  static deleteTask(id) {
    const tasks = this.readTasks();
    const filtered = tasks.filter((task) => task.id !== id);
    if (filtered.length === tasks.length) return false;
    this.writeTasks(filtered);
    return true;
  }
}
