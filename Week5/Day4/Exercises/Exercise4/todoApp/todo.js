export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, completed: false });
      console.log(`Task added: ${task}`);
    }
  
    markTaskComplete(task) {
      const taskToComplete = this.tasks.find(t => t.task === task);
      if (taskToComplete) {
        taskToComplete.completed = true;
        console.log(`Task completed: ${task}`);
      } else {
        console.log(`Task not found: ${task}`);
      }
    }
  
    listTasks() {
      if (this.tasks.length === 0) {
        console.log("No tasks found.");
        return;
      }
  
      console.log("Your Todo List:");
      this.tasks.forEach(t => {
        console.log(`${t.task} [${t.completed ? '✔️' : '❌'  }]`);
      });
    }
  }
  