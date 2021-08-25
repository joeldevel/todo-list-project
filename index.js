

// example of how a todo item would be
todoItem = {
  idTodoItem: 1,
  title: "Go for a walk",
  description: "",
  dueDate: "today",
  priority: "high",
  repeatWeekly: true,
  done: false,
  notes: " some longer text to explain about the matter",
  project: ""
}


// example of how a project would be
project = {
  idProject: 1,
  name: "work related",
  todos: [{title:"todo 1"}, {title:"todo 2"}, {title:"todo 3"}],

  addTodo: function(todo) {
    this.todos.push(todo);
  },

  showTodos: function() {
    this.todos.forEach(todo => console.log(todo));
  }
}

app = {
  projects: [{name: "school"}, {name: "work"}, {name: "house chores"}],

  addProject: function (project) {
    this.projects.push(project);
  },

  showProjects: function () {
    this.projects.forEach(project => console.log(project));
  }
}
console.log(todoItem);
